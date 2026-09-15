// Downloads the site's stock photography from free-licence sources
// (Unsplash + Pexels — both permit commercial use without attribution).
// Run: node tools/fetch-images.mjs [--force]
import { mkdir, writeFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const FORCE = process.argv.includes('--force');
const OUT = join(process.cwd(), 'assets', 'img');

const un = (slug, w = 1600, h = 1000) =>
  `https://images.unsplash.com/photo-${slug}?w=${w}&h=${h}&fit=crop&crop=entropy&q=62&fm=jpg`;
const px = (id, w = 1600, h = 1000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

/** @type {Array<[string, string]>} */
const MANIFEST = [
  // ---- hero slides (wide) ----
  ['hero/hero-1.jpg', px(8005368, 1800, 1013)],
  ['hero/hero-2.jpg', un('1632759145351-1d592919f522', 1800, 1013)],
  ['hero/hero-3.jpg', un('1517581177682-a085bb7ffb15', 1800, 1013)],

  // ---- page banners (wide, short) ----
  ['banner/services.jpg', px(5691658, 1800, 656)],
  ['banner/projects.jpg', px(3990359, 1800, 656)],
  ['banner/about.jpg', px(1216589, 1800, 656)],
  ['banner/contact.jpg', un('1449844908441-8829872d2607', 1800, 656)],
  ['banner/faq.jpg', un('1621607512214-68297480165e', 1800, 656)],
  ['banner/areas.jpg', px(259588, 1800, 656)],
  ['banner/sectors.jpg', un('1497366811353-6870744d04b2', 1800, 656)],
  ['banner/legal.jpg', un('1497366216548-37526070297c', 1800, 656)],

  // ---- service imagery ----
  ['services/handyman.jpg', px(1249611, 960, 720)],
  ['services/painting.jpg', px(6474471, 960, 720)],
  ['services/carpentry.jpg', px(4491881, 960, 720)],
  ['services/roofing.jpg', un('1635424710928-0544e8512eae', 960, 720)],
  ['services/plumbing.jpg', px(5591581, 960, 720)],
  ['services/electrical.jpg', un('1544724569-5f546fd6f2b5', 960, 720)],
  ['services/grounds.jpg', un('1585320806297-9794b3e4eeae', 960, 720)],
  ['services/cleaning.jpg', un('1532996122724-e3c354a0b15b', 960, 720)],
  ['services/refurbishment.jpg', un('1604014237800-1c9102c219da', 960, 720)],
  ['services/emergency.jpg', un('1581141849291-1125c7b692b5', 960, 720)],

  // ---- project / case-study imagery ----
  ['projects/kitchen.jpg', un('1556911220-bff31c812dba', 960, 720)],
  ['projects/bathroom.jpg', un('1584622650111-993a426fbf0a', 960, 720)],
  ['projects/lounge.jpg', px(462235, 960, 720)],
  ['projects/roofline.jpg', px(209266, 960, 720)],
  ['projects/commercial.jpg', un('1497366216548-37526070297c', 960, 720)],
  ['projects/garden.jpg', un('1591857177580-dc82b9ac4e1e', 960, 720)],
  ['projects/void.jpg', px(7218525, 960, 720)],
  ['projects/flat.jpg', px(5824901, 960, 720)],
  ['projects/exterior.jpg', px(259588, 960, 720)],
  ['projects/office.jpg', un('1497366811353-6870744d04b2', 960, 720)],

  // ---- about / general ----
  ['about/team.jpg', px(1216589, 1200, 857)],
  ['about/onsite.jpg', px(1108101, 1200, 857)],
  ['about/tools.jpg', px(5691658, 1200, 857)],
  ['about/survey.jpg', un('1581141849291-1125c7b692b5', 1200, 857)],

  // ---- call-to-action band ----
  ['misc/cta.jpg', px(1249611, 1800, 844)],
  ['misc/quote.jpg', un('1607400201515-c2c41c07d307', 1200, 857)],
  ['misc/trust.jpg', un('1600880292089-90a7e086ee0c', 960, 640)],
  ['projects/riser.jpg', un('1607472586893-edb57bdc0e39', 960, 720)],
  ['projects/stairwell.jpg', un('1502005229762-cf1b2da7c5d6', 960, 720)],
];

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

let ok = 0, skipped = 0, failed = 0;
for (const [name, url] of MANIFEST) {
  const dest = join(OUT, name);
  if (!FORCE && await exists(dest)) { skipped++; continue; }
  await mkdir(dirname(dest), { recursive: true });
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 retrohof-site-build' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 4000) throw new Error(`suspiciously small (${buf.length}b)`);
    await writeFile(dest, buf);
    console.log(`ok   ${name}  ${(buf.length / 1024).toFixed(0)}kB`);
    ok++;
  } catch (err) {
    console.error(`FAIL ${name}  ${url}\n     ${err.message}`);
    failed++;
  }
}
console.log(`\n${ok} downloaded, ${skipped} already present, ${failed} failed.`);
if (failed) process.exitCode = 1;
