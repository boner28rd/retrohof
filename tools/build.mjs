// ---------------------------------------------------------------------------
// Static site build. Zero dependencies.
//   node tools/build.mjs
// Reads the page modules in src/pages, renders them through src/layout.mjs and
// writes plain HTML to the repository root so the site can be served by GitHub
// Pages (or anything else) with no build step on the host.
// ---------------------------------------------------------------------------
import { mkdir, writeFile, readdir, rm, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

import { site } from '../src/data/site.mjs';
import { projects } from '../src/data/projects.mjs';
import { testimonials } from '../src/data/content.mjs';
import { render } from '../src/layout.mjs';

import home from '../src/pages/home.mjs';
import servicePages from '../src/pages/services.mjs';
import projectsPage from '../src/pages/projects.mjs';
import sectorsPage from '../src/pages/sectors.mjs';
import areasPage from '../src/pages/areas.mjs';
import aboutPage from '../src/pages/about.mjs';
import contactPage from '../src/pages/contact.mjs';
import faqPage from '../src/pages/faq.mjs';
import legalPages from '../src/pages/legal.mjs';
import notFound from '../src/pages/notfound.mjs';

const ROOT = process.cwd();

const pages = [
  home,
  ...servicePages,
  projectsPage,
  sectorsPage,
  areasPage,
  aboutPage,
  contactPage,
  faqPage,
  ...legalPages,
  notFound,
];

/* ----------------------------------------------------------- generated -- */

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const priority = (url) => {
    if (url === '/') return '1.0';
    if (url === '/services' || url === '/contact') return '0.9';
    if (url.startsWith('/services/')) return '0.8';
    if (['/projects', '/about', '/sectors', '/areas'].includes(url)) return '0.7';
    if (url === '/faq') return '0.6';
    return '0.3';
  };
  const urls = pages
    .filter((p) => !p.noindex)
    .map(
      (p) => `  <url>
    <loc>${site.baseUrl}${p.url === '/' ? '/' : p.url}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(p.url)}</priority>
  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const robots = () => `User-agent: *
Allow: /
Disallow: /404.html

Sitemap: ${site.baseUrl}/sitemap.xml
`;

const webmanifest = () =>
  JSON.stringify(
    {
      name: `${site.legalName} — ${site.descriptor}`,
      short_name: site.name,
      description: 'Multi-trade property maintenance across Surrey.',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#d22630',
      icons: [
        { src: '/assets/img/logo/logo.png', sizes: '76x100', type: 'image/png' },
        { src: '/assets/img/logo/logo-full.png', sizes: '2924x1462', type: 'image/png', purpose: 'any' },
      ],
    },
    null,
    2,
  ) + '\n';

/* --------------------------------------------------------------- build -- */

async function cleanGenerated() {
  // Remove previously generated HTML so renamed pages do not linger.
  const entries = await readdir(ROOT, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile() && e.name.endsWith('.html')) await rm(join(ROOT, e.name), { force: true });
  }
  await rm(join(ROOT, 'services'), { recursive: true, force: true });
}

async function write(relPath, contents) {
  const dest = join(ROOT, relPath);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, contents, 'utf8');
  return dest;
}

function checkLinks(htmlByFile) {
  const problems = [];
  const files = new Set(Object.keys(htmlByFile).map((f) => f.replace(/\\/g, '/')));
  for (const [file, html] of Object.entries(htmlByFile)) {
    const dir = file.includes('/') ? file.slice(0, file.lastIndexOf('/')) : '';
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
      if (/^(https?:|mailto:|tel:|#|data:)/.test(href)) continue;
      const [path] = href.split('#');
      if (!path || !path.endsWith('.html')) continue;
      // resolve relative to this file's directory
      const parts = (dir ? dir.split('/') : []).concat(path.split('/'));
      const stack = [];
      for (const seg of parts) {
        if (seg === '.' || seg === '') continue;
        if (seg === '..') stack.pop();
        else stack.push(seg);
      }
      const resolved = stack.join('/');
      if (!files.has(resolved)) problems.push(`${file} -> ${href} (resolves to ${resolved})`);
    }
  }
  return problems;
}

async function checkImages(htmlByFile) {
  const missing = new Set();
  for (const [file, html] of Object.entries(htmlByFile)) {
    const dir = file.includes('/') ? file.slice(0, file.lastIndexOf('/')) : '';
    const srcs = [...html.matchAll(/src="([^"]+)"/g)].map((m) => m[1]);
    for (const src of srcs) {
      if (/^(https?:|data:)/.test(src)) continue;
      const parts = (dir ? dir.split('/') : []).concat(src.split('/'));
      const stack = [];
      for (const seg of parts) {
        if (seg === '.' || seg === '') continue;
        if (seg === '..') stack.pop();
        else stack.push(seg);
      }
      const resolved = stack.join('/');
      try {
        await stat(join(ROOT, resolved));
      } catch {
        missing.add(`${file} -> ${src}`);
      }
    }
  }
  return [...missing];
}

async function main() {
  await cleanGenerated();

  const htmlByFile = {};
  for (const page of pages) {
    htmlByFile[page.file] = render(page);
  }

  for (const [file, html] of Object.entries(htmlByFile)) {
    await write(file, html);
  }

  await write('sitemap.xml', sitemap());
  await write('robots.txt', robots());
  await write('site.webmanifest', webmanifest());
  await write('.nojekyll', '');

  const linkProblems = checkLinks(htmlByFile);
  const imageProblems = await checkImages(htmlByFile);

  console.log(`Built ${pages.length} pages + sitemap, robots, manifest.`);
  for (const p of pages) console.log(`  ${p.url.padEnd(34)} -> ${p.file}`);

  if (linkProblems.length) {
    console.warn('\nBroken internal links:');
    linkProblems.forEach((p) => console.warn('  ' + p));
  }
  if (imageProblems.length) {
    console.warn('\nMissing images:');
    imageProblems.forEach((p) => console.warn('  ' + p));
  }

  const placeholderProjects = projects.filter((p) => p.placeholder);
  const placeholderQuotes = testimonials.filter((t) => t.placeholder);
  if (placeholderProjects.length || placeholderQuotes.length) {
    console.warn('\n' + '='.repeat(72));
    console.warn('PLACEHOLDER CONTENT STILL PRESENT — do not publish as-is:');
    if (placeholderProjects.length) {
      console.warn(`  ${placeholderProjects.length} project case studies in src/data/projects.mjs`);
    }
    if (placeholderQuotes.length) {
      console.warn(`  ${placeholderQuotes.length} testimonials in src/data/content.mjs`);
    }
    console.warn('  Replace with real jobs and real, attributable reviews before going live.');
    console.warn('='.repeat(72));
  }

  if (linkProblems.length || imageProblems.length) process.exitCode = 1;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
