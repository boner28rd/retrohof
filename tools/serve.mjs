// Minimal zero-dependency static server for local previewing.
// Usage: node tools/serve.mjs   (PORT env var optional, default 5510)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve as resolvePath, sep } from 'node:path';

const ROOT = resolvePath(process.cwd());
const PORT = Number(process.env.PORT || 5510);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

async function exists(p) {
  try { return await stat(p); } catch { return null; }
}

async function locate(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  let p = resolvePath(ROOT, '.' + clean);
  if (p !== ROOT && !p.startsWith(ROOT + sep)) return null;

  const s = await exists(p);
  if (s && s.isDirectory()) {
    const idx = join(p, 'index.html');
    if (await exists(idx)) return idx;
    // A directory can shadow a sibling page: /services is both the folder
    // holding the detail pages and services.html. Prefer the page.
    if (await exists(p + '.html')) return p + '.html';
    return null;
  }
  if (s) return p;

  // extensionless "pretty" URL -> try .html
  if (!extname(p)) {
    const html = p + '.html';
    if (await exists(html)) return html;
    const idx = join(p, 'index.html');
    if (await exists(idx)) return idx;
  }
  return null;
}

createServer(async (req, res) => {
  let file = await locate(req.url || '/');
  let code = 200;
  if (!file) {
    file = join(ROOT, '404.html');
    code = 404;
  }
  try {
    const body = await readFile(file);
    res.writeHead(code, {
      'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
}).listen(PORT, () => {
  console.log(`RetroHof static server: http://localhost:${PORT}  (root: ${ROOT})`);
});
