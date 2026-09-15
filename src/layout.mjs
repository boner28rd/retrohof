import { site, nav, footerLegal } from './data/site.mjs';
import { services } from './data/services.mjs';
import { icon } from './icons.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rel = (depth, href) => {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  const up = depth > 0 ? '../'.repeat(depth) : './';
  if (href === '/') return depth > 0 ? up + 'index.html' : 'index.html';
  const clean = href.replace(/^\//, '');
  const [path, hash = ''] = clean.split('#');
  // Only pretty page paths get an .html extension; assets already have one.
  const hasExt = /\.[a-z0-9]{2,12}$/i.test(path);
  const file = hasExt ? path : `${path}.html`;
  return up + file + (hash ? `#${hash}` : '');
};

function topbar(depth) {
  return `
<div class="topbar">
  <div class="wrap topbar__in">
    <a class="topbar__item" href="${site.phone.href}">${icon('phone', { size: 16 })}<span>${site.phone.display}</span></a>
    <a class="topbar__item" href="mailto:${site.email}">${icon('mail', { size: 16 })}<span>${site.email}</span></a>
    <span class="topbar__item topbar__item--muted">${icon('clock', { size: 16 })}<span>${esc(site.hours)}</span></span>
    <span class="topbar__spacer"></span>
    <span class="topbar__item topbar__item--muted topbar__item--area">${icon('pin', { size: 16 })}<span>${esc(site.address.locality)}, ${esc(site.address.region)}</span></span>
  </div>
</div>`;
}

function navItems(depth, current) {
  const items = nav.map((item) => {
    const isCurrent = current === item.href || (item.href !== '/' && current.startsWith(item.href));
    if (item.label === 'Services') {
      const subs = services
        .map(
          (s) =>
            `<li><a href="${rel(depth, `/services/${s.slug}`)}">${icon(s.icon, { size: 18 })}<span>${esc(s.short)}</span></a></li>`,
        )
        .join('');
      return `
  <li class="nav__item nav__item--has-sub">
    <a class="nav__link${isCurrent ? ' is-current' : ''}" href="${rel(depth, item.href)}">${esc(item.label)}${icon('chevron', { size: 16, cls: 'nav__caret' })}</a>
    <div class="nav__sub">
      <ul class="nav__sublist">${subs}</ul>
      <a class="nav__suball" href="${rel(depth, '/services')}">All services${icon('arrow', { size: 16 })}</a>
    </div>
  </li>`;
    }
    return `
  <li class="nav__item"><a class="nav__link${isCurrent ? ' is-current' : ''}" href="${rel(depth, item.href)}">${esc(item.label)}</a></li>`;
  });
  return items.join('');
}

function header(depth, current) {
  return `
${topbar(depth)}
<header class="masthead" id="masthead">
  <div class="wrap masthead__in">
    <a class="brand" href="${rel(depth, '/')}" aria-label="${esc(site.name)} — home">
      <img src="${rel(depth, '/assets/img/logo/logo-footer.png')}" alt="${esc(site.name)} ${esc(site.strapline)}" width="640" height="145" fetchpriority="high">
    </a>

    <nav class="nav" id="primary-nav" aria-label="Primary">
      <ul class="nav__list">${navItems(depth, current)}</ul>
    </nav>

    <div class="masthead__cta">
      <a class="btn btn--ghost masthead__tel" href="${site.phone.href}">${icon('phone', { size: 18 })}<span>${site.phone.display}</span></a>
      <a class="btn btn--primary" href="${rel(depth, '/contact')}">Get a quote</a>
    </div>

    <button class="burger" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
      ${icon('menu', { size: 26, cls: 'burger__open' })}${icon('close', { size: 26, cls: 'burger__close' })}
    </button>
  </div>
</header>`;
}

function footer(depth) {
  const serviceLinks = services
    .map((s) => `<li><a href="${rel(depth, `/services/${s.slug}`)}">${esc(s.short)}</a></li>`)
    .join('');
  const companyLinks = [
    ['About us', '/about'],
    ['Projects', '/projects'],
    ['Who we help', '/sectors'],
    ['Areas covered', '/areas'],
    ['FAQs', '/faq'],
    ['Contact', '/contact'],
  ]
    .map(([l, h]) => `<li><a href="${rel(depth, h)}">${esc(l)}</a></li>`)
    .join('');
  const legalLinks = footerLegal
    .map((l) => `<li><a href="${rel(depth, l.href)}">${esc(l.label)}</a></li>`)
    .join('');

  const social = site.social.length
    ? `<ul class="social">${site.social
        .map((s) => `<li><a href="${esc(s.href)}" rel="noopener" aria-label="${esc(s.label)}">${esc(s.label)}</a></li>`)
        .join('')}</ul>`
    : '';

  return `
<footer class="foot">
  <div class="wrap foot__grid">
    <div class="foot__col foot__col--brand">
      <img class="foot__logo" src="${rel(depth, '/assets/img/logo/logo-footer.png')}" alt="${esc(site.legalName)}" width="640" height="145" loading="lazy">
      <p class="foot__blurb">Property maintenance, repairs and refurbishment for homes, rentals and commercial premises across ${esc(site.address.region)}. One team, one number, work that is guaranteed.</p>
      <ul class="foot__contact">
        <li><a href="${site.phone.href}">${icon('phone', { size: 18 })}<span>${site.phone.display}</span></a></li>
        <li><a href="mailto:${site.email}">${icon('mail', { size: 18 })}<span>${site.email}</span></a></li>
        <li>${icon('clock', { size: 18 })}<span>${esc(site.hours)}</span></li>
        <li>${icon('pin', { size: 18 })}<span>${esc(site.address.locality)}, ${esc(site.address.region)}</span></li>
      </ul>
      ${social}
    </div>
    <div class="foot__col">
      <h2 class="foot__head">Services</h2>
      <ul class="foot__links">${serviceLinks}</ul>
    </div>
    <div class="foot__col">
      <h2 class="foot__head">Company</h2>
      <ul class="foot__links">${companyLinks}</ul>
    </div>
    <div class="foot__col">
      <h2 class="foot__head">Legal</h2>
      <ul class="foot__links">${legalLinks}</ul>
      <a class="btn btn--primary foot__btn" href="${rel(depth, '/contact')}">Request a quote</a>
    </div>
  </div>
  <div class="foot__bar">
    <div class="wrap foot__bar-in">
      <p>&copy; ${new Date().getFullYear()} ${esc(site.legalName)}. All rights reserved.${site.companyNumber ? ` Registered in England &amp; Wales, company no. ${esc(site.companyNumber)}.` : ''}</p>
      <p class="foot__made">${esc(site.descriptor)}</p>
    </div>
  </div>
</footer>`;
}

function jsonLd(depth, page) {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.baseUrl}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: `Professional property maintenance, repairs, decorating and refurbishment across ${site.regionPhrase}.`,
    url: site.baseUrl + '/',
    telephone: site.phone.display,
    email: site.email,
    image: `${site.baseUrl}/assets/img/logo/logo-full.png`,
    logo: `${site.baseUrl}/assets/img/logo/logo-full.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      ...site.counties.map((c) => ({ '@type': 'AdministrativeArea', name: c })),
      ...site.areas.map((a) => ({ '@type': 'City', name: a })),
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, url: `${site.baseUrl}/services/${s.slug}` },
    })),
  };

  const blocks = [business];

  if (page.breadcrumbs && page.breadcrumbs.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ label: 'Home', href: '/' }, ...page.breadcrumbs].map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        item: site.baseUrl + (c.href === '/' ? '/' : c.href),
      })),
    });
  }

  if (page.faqSchema && page.faqSchema.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqSchema.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }

  return blocks
    .map((b) => `<script type="application/ld+json">${JSON.stringify(b).replace(/</g, '\\u003c')}</script>`)
    .join('\n');
}

/**
 * @param {{ url:string, title:string, description:string, body:string,
 *           depth?:number, bodyClass?:string, breadcrumbs?:Array, faqSchema?:Array,
 *           ogImage?:string, noindex?:boolean }} page
 */
export function render(page) {
  const depth = page.depth ?? 0;
  const canonical = site.baseUrl + (page.url === '/' ? '/' : page.url);
  const ogImage = site.baseUrl + (page.ogImage || '/assets/img/hero/hero-1.jpg');

  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
${page.noindex ? '<meta name="robots" content="noindex, follow">\n' : ''}<meta name="theme-color" content="#D22630">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.legalName)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${rel(depth, '/assets/img/logo/favicon.ico')}" sizes="any">
<link rel="apple-touch-icon" href="${rel(depth, '/assets/img/logo/logo.png')}">
<link rel="manifest" href="${rel(depth, '/site.webmanifest')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="${rel(depth, '/assets/css/style.css')}">
${jsonLd(depth, page)}
</head>
<body class="${page.bodyClass || ''}" data-depth="${depth}">
<a class="skip" href="#main">Skip to content</a>
${header(depth, page.url)}
<main id="main">
${page.body}
</main>
${footer(depth)}
<script src="${rel(depth, '/assets/js/site.js')}" defer></script>
</body>
</html>
`;
}

export { rel };
