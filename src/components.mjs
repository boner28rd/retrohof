import { site } from './data/site.mjs';
import { services } from './data/services.mjs';
import { process as steps, credentials, stats } from './data/content.mjs';
import { icon } from './icons.mjs';
import { esc, rel } from './layout.mjs';

/** Page banner used on every page except the home page. */
export function banner(d, { eyebrow, title, lead, image, breadcrumbs = [] }) {
  const crumbs = [{ label: 'Home', href: '/' }, ...breadcrumbs];
  const trail = crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<li aria-current="page">${esc(c.label)}</li>`
        : `<li><a href="${rel(d, c.href)}">${esc(c.label)}</a></li>`,
    )
    .join('');
  return `
<section class="banner">
  <img class="banner__img" src="${rel(d, image)}" alt="" width="1920" height="700" fetchpriority="high">
  <div class="wrap banner__in">
    ${eyebrow ? `<p class="eyebrow eyebrow--light">${esc(eyebrow)}</p>` : ''}
    <h1 class="banner__title">${title}</h1>
    ${lead ? `<p class="banner__lead">${lead}</p>` : ''}
  </div>
  <nav class="crumbs" aria-label="Breadcrumb"><ol class="wrap crumbs__list">${trail}</ol></nav>
</section>`;
}

export function sectionHead({ eyebrow, title, lead, align = 'center', level = 2 }) {
  return `
<div class="sec-head sec-head--${align}">
  ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
  <h${level} class="sec-head__title">${title}</h${level}>
  ${lead ? `<p class="sec-head__lead">${lead}</p>` : ''}
</div>`;
}

export function serviceCard(d, s, { featured = false } = {}) {
  return `
<article class="svc-card${featured ? ' svc-card--featured' : ''}">
  <a class="svc-card__media" href="${rel(d, `/services/${s.slug}`)}" tabindex="-1" aria-hidden="true">
    <img src="${rel(d, s.image)}" alt="" width="1200" height="900" loading="lazy">
  </a>
  <div class="svc-card__body">
    <span class="svc-card__icon">${icon(s.icon, { size: 26 })}</span>
    <h3 class="svc-card__title"><a href="${rel(d, `/services/${s.slug}`)}">${esc(s.title)}</a></h3>
    <p class="svc-card__text">${esc(s.teaser)}</p>
    <span class="svc-card__more">Read more ${icon('arrow', { size: 16 })}</span>
  </div>
</article>`;
}

export function ctaBand(d, {
  eyebrow = 'Ready when you are',
  title = 'Tell us what needs doing',
  text = 'Send a photo and a description and we will come back with a fixed price. Surveys and quotations are free.',
  primary = { label: 'Request a quote', href: '/contact' },
} = {}) {
  return `
<section class="cta">
  <img class="cta__img" src="${rel(d, '/assets/img/misc/cta.jpg')}" alt="" width="1920" height="900" loading="lazy">
  <div class="wrap cta__in">
    <div class="cta__text">
      <p class="eyebrow eyebrow--light">${esc(eyebrow)}</p>
      <h2 class="cta__title">${esc(title)}</h2>
      <p class="cta__lead">${esc(text)}</p>
    </div>
    <div class="cta__actions">
      <a class="btn btn--primary btn--lg" href="${rel(d, primary.href)}">${esc(primary.label)}</a>
      <a class="btn btn--outline-light btn--lg" href="${site.phone.href}">${icon('phone', { size: 18 })}${site.phone.display}</a>
    </div>
  </div>
</section>`;
}

export function statBand() {
  return `
<section class="stats">
  <div class="wrap stats__grid">
    ${stats.map(([n, l]) => `<div class="stat"><span class="stat__n">${esc(n)}</span><span class="stat__l">${esc(l)}</span></div>`).join('')}
  </div>
</section>`;
}

export function processSteps({ title = 'How we work', eyebrow = 'Simple, predictable, no surprises', lead = '' } = {}) {
  return `
<section class="sec sec--tint">
  <div class="wrap">
    ${sectionHead({ eyebrow, title, lead })}
    <ol class="steps">
      ${steps
        .map(
          ([t, b], i) => `
      <li class="step">
        <span class="step__n">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="step__t">${esc(t)}</h3>
        <p class="step__b">${esc(b)}</p>
      </li>`,
        )
        .join('')}
    </ol>
  </div>
</section>`;
}

export function credentialGrid() {
  return `
<ul class="creds">
  ${credentials
    .map(
      ([t, b]) => `
  <li class="cred">
    <span class="cred__tick">${icon('check', { size: 16 })}</span>
    <div><strong>${esc(t)}</strong><span>${esc(b)}</span></div>
  </li>`,
    )
    .join('')}
</ul>`;
}

export function serviceGrid(d, list = services, opts = {}) {
  return `<div class="svc-grid">${list.map((s) => serviceCard(d, s, opts)).join('')}</div>`;
}

export function faqList(d, items, { open = 0 } = {}) {
  return `
<div class="faq">
  ${items
    .map(
      ([q, a], i) => `
  <details class="faq__item"${i === open ? ' open' : ''}>
    <summary class="faq__q">${esc(q)}${icon('chevron', { size: 20, cls: 'faq__caret' })}</summary>
    <div class="faq__a"><p>${esc(a)}</p></div>
  </details>`,
    )
    .join('')}
</div>`;
}

export function areaList(d, { limit = 0 } = {}) {
  const list = limit ? site.areas.slice(0, limit) : site.areas;
  return `<ul class="areas">${list
    .map((a) => `<li>${icon('pin', { size: 15 })}<span>${esc(a)}</span></li>`)
    .join('')}</ul>`;
}
