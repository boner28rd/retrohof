// ---------------------------------------------------------------------------
// Copy just the publishable site into an output directory, leaving behind the
// sources and build tooling that happen to share the repo root.
//
//   node tools/stage.mjs --host=cloudflare --out=dist
//   node tools/stage.mjs --host=iis --out=.deploy
//
// Also importable: `stage({ host: 'iis', out: '.deploy' })`, which is how
// tools/deploy.mjs builds its msdeploy payload.
//
// `host` decides which host-specific config file is included. Each host would
// otherwise serve the other's file as a public static download: web.config is
// IIS-only, _headers is Cloudflare-only, .nojekyll is GitHub Pages-only.
// ---------------------------------------------------------------------------
import { readdir, mkdir, copyFile, rm, stat } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();

// Never published, whatever the host.
const EXCLUDE_DIRS = new Set(['.git', '.claude', '.deploy', 'dist', 'src', 'tools', 'node_modules']);
const EXCLUDE_FILES = new Set(['README.md', 'package.json', 'package-lock.json', '.gitignore']);

const HOST_FILES = {
  iis: ['web.config'],
  cloudflare: ['_headers', '_redirects'],
  github: ['.nojekyll'],
};
const ALL_HOST_FILES = new Set(Object.values(HOST_FILES).flat());

async function collect(dir, keep) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (dir === ROOT && EXCLUDE_DIRS.has(e.name)) continue;
      out.push(...(await collect(full, keep)));
    } else if (e.isFile()) {
      if (EXCLUDE_FILES.has(e.name)) continue;
      if (ALL_HOST_FILES.has(e.name) && !keep.has(e.name)) continue;
      out.push(full);
    }
  }
  return out;
}

/** @param {{host?: string, out?: string}} opts */
export async function stage({ host = 'cloudflare', out = 'dist' } = {}) {
  if (!HOST_FILES[host]) {
    throw new Error(`Unknown host "${host}". Expected one of: ${Object.keys(HOST_FILES).join(', ')}`);
  }
  const dir = join(ROOT, out);
  await rm(dir, { recursive: true, force: true });

  const keep = new Set(HOST_FILES[host]);
  const files = await collect(ROOT, keep);

  let bytes = 0;
  for (const f of files) {
    const dest = join(dir, relative(ROOT, f));
    await mkdir(dirname(dest), { recursive: true });
    await copyFile(f, dest);
    bytes += (await stat(f)).size;
  }
  return { dir, host, count: files.length, bytes };
}

/* ------------------------------------------------------------------- cli -- */

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arg = (name, fallback) => {
    const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
    return hit ? hit.slice(name.length + 3) : fallback;
  };
  try {
    const r = await stage({ host: arg('host', 'cloudflare'), out: arg('out', 'dist') });
    console.log(
      `Staged ${r.count} files (${(r.bytes / 1024 / 1024).toFixed(1)} MB) for ${r.host} in ${relative(ROOT, r.dir) || '.'}/`,
    );
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
