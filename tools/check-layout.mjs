// Headless-ish layout audit without a browser: parses the built HTML and
// reports which two-column rows are missing the alignment/fill classes.
// Run: node tools/check-layout.mjs
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();

async function htmlFiles(dir = ROOT, depth = 0) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || ['node_modules', 'src', 'tools', 'assets', 'dist'].includes(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory() && depth < 2) out.push(...(await htmlFiles(p, depth + 1)));
    else if (e.isFile() && e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = await htmlFiles();
let rows = 0;
const problems = [];

for (const f of files) {
  const html = await readFile(f, 'utf8');
  const rel = f.slice(ROOT.length + 1).replace(/\\/g, '/');

  // every two-column row
  for (const m of html.matchAll(/<div class="([^"]*\bcols\b[^"]*)"/g)) {
    rows++;
    const cls = m[1];
    if (cls.includes('cols--center')) continue; // deliberate opt-out
  }

  // media columns that are not set to track the text height
  for (const m of html.matchAll(/<div class="(cols__media[^"]*)"/g)) {
    const cls = m[1];
    if (!cls.includes('cols__media--fill')) {
      problems.push(`${rel}: media column without --fill  (${cls})`);
    }
  }

  // the old inline override should be gone
  if (html.includes('style="align-items:start"')) {
    problems.push(`${rel}: leftover inline align-items override`);
  }
  // media-first must pair with a media-first ratio
  for (const m of html.matchAll(/<div class="([^"]*cols--media-first[^"]*)"/g)) {
    if (m[1].includes('cols--7-5')) {
      problems.push(`${rel}: cols--media-first paired with cols--7-5 (image would take the wide column)`);
    }
  }
}

console.log(`${files.length} pages, ${rows} two-column rows.`);
if (problems.length) {
  console.log('\nIssues:');
  problems.forEach((p) => console.log('  ' + p));
  process.exitCode = 1;
} else {
  console.log('All media columns track the text height; no ratio mismatches.');
}
