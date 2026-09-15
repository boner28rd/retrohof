import { site } from '../data/site.mjs';
import { services } from '../data/services.mjs';
import { projects } from '../data/projects.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import { banner, sectionHead, serviceGrid, ctaBand, processSteps, faqList } from '../components.mjs';

/* ----------------------------------------------------------- hub page -- */
const hub = () => {
  const d = 1;
  return {
    url: '/services',
    file: 'services/index.html',
    depth: d,
    title: `Property Maintenance Services | ${site.regionPhraseTitle} | ${site.legalName}`,
    description:
      'Handyman repairs, painting and decorating, carpentry, roofing, plumbing, electrical work, grounds maintenance, cleaning, refurbishment and 24/7 emergency cover across southern England.',
    ogImage: '/assets/img/banner/services.jpg',
    breadcrumbs: [{ label: 'Services', href: '/services' }],
    body: [
      banner(d, {
        eyebrow: 'What we do',
        title: 'Property maintenance services',
        lead: 'Ten core services covering everything a property needs — each one delivered by trades who do it every day, not by whoever happened to be free.',
        image: '/assets/img/banner/services.jpg',
        breadcrumbs: [{ label: 'Services', href: '/services' }],
      }),
      `
<section class="sec">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Choose a service',
      title: 'One contractor, every trade',
      lead: 'Book a single job, or combine several into one visit. For properties needing regular attention we set up a maintenance schedule with a fixed monthly figure.',
    })}
    ${serviceGrid(d, services)}
  </div>
</section>`,
      `
<section class="sec sec--dark">
  <div class="wrap cols cols--2 cols--7-5">
    <div>
      <p class="eyebrow">Combined & managed work</p>
      <h2 class="sec-head__title">Most jobs need more than one trade</h2>
      <p class="sec-head__lead">A leak is rarely just a plumbing job. It is a plumber, then a plasterer, then a decorator — and if you are organising all three yourself, the property sits damaged while you do it.</p>
      <p>We sequence the trades, book them in order and take responsibility for the outcome rather than the individual tasks. You get one quotation, one programme and one invoice.</p>
      <ul class="ticks ticks--2">
        <li>Single point of contact throughout</li>
        <li>Trades sequenced so nobody waits on site</li>
        <li>One consolidated invoice at the end</li>
        <li>Certificates issued together as a pack</li>
      </ul>
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/contact')}">Discuss a project</a>
      </div>
    </div>
    <div class="cols__media cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/misc/quote.jpg')}" alt="Tradesperson fitting new joinery during a managed refurbishment" width="1400" height="1000" loading="lazy">
    </div>
  </div>
</section>`,
      processSteps({
        eyebrow: 'Our process',
        title: 'How a job runs, start to finish',
        lead: 'The same four steps whether it is a half-day of handyman work or a twelve-week refurbishment.',
      }),
      ctaBand(d),
    ].join('\n'),
  };
};

/* -------------------------------------------------------- detail pages -- */
function detail(s) {
  const d = 2;
  const related = projects.filter((p) => p.services.includes(s.slug)).slice(0, 3);
  const others = services.filter((x) => x.slug !== s.slug);

  const asideNav = `
<div class="aside-card">
  <h3>All services</h3>
  <ul class="aside-nav">
    ${services
      .map(
        (x) =>
          `<li><a href="${rel(d, `/services/${x.slug}`)}"${x.slug === s.slug ? ' aria-current="page"' : ''}>${icon(x.icon, { size: 18 })}<span>${esc(x.short)}</span></a></li>`,
      )
      .join('')}
  </ul>
</div>`;

  const asideContact = `
<div class="aside-card aside-card--dark">
  <h3>Get a price for this</h3>
  <p>Free survey and a written, itemised quotation — usually within two to three working days.</p>
  <div class="aside-contact">
    <a class="btn btn--primary btn--block" href="${rel(d, '/contact')}?service=${s.slug}">Request a quote</a>
    <a class="btn btn--outline-light btn--block" href="${site.phone.href}">${icon('phone', { size: 18 })}${site.phone.display}</a>
  </div>
</div>`;

  const relatedBlock = related.length
    ? `
<section class="sec sec--tint">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Related work',
      title: `${esc(s.title)} in practice`,
      lead: 'Examples of projects where this service formed part of the job.',
    })}
    <div class="proj-grid">
      ${related
        .map(
          (p) => `
      <article class="proj">
        <div class="proj__media">
          <img src="${rel(d, p.image)}" alt="${esc(p.imageAlt)}" width="1200" height="900" loading="lazy">
          <span class="proj__tag">${esc(p.category)}</span>
        </div>
        <div class="proj__body">
          <h3 class="proj__title">${esc(p.title)}</h3>
          <div class="proj__meta">
            <span>${icon('pin', { size: 14 })}${esc(p.location)}</span>
            <span>${icon('calendar', { size: 14 })}${esc(p.duration)}</span>
          </div>
          <p class="proj__summary">${esc(p.summary)}</p>
          <a class="svc-card__more" href="${rel(d, '/projects')}#${esc(p.slug)}">View project ${icon('arrow', { size: 16 })}</a>
        </div>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`
    : '';

  return {
    url: `/services/${s.slug}`,
    file: `services/${s.slug}/index.html`,
    depth: d,
    title: `${s.title} | ${site.regionPhraseTitle} | ${site.legalName}`,
    description: `${s.lead} Fixed prices, fully insured, 12-month workmanship guarantee. Covering ${site.address.region} and across ${site.regionPhrase}.`,
    ogImage: s.image,
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      { label: s.title, href: `/services/${s.slug}` },
    ],
    faqSchema: s.faqs,
    body: [
      banner(d, {
        eyebrow: 'Service',
        title: esc(s.title),
        lead: esc(s.lead),
        image: s.image,
        breadcrumbs: [
          { label: 'Services', href: '/services' },
          { label: s.title, href: `/services/${s.slug}` },
        ],
      }),
      `
<section class="sec">
  <div class="wrap svc-detail">
    <div class="svc-body">
      <h2>${esc(s.title)} across ${esc(site.regionPhrase)}</h2>
      <p>${esc(s.intro)}</p>

      <h2>What this covers</h2>
      <ul class="ticks ticks--2">
        ${s.includes.map((i) => `<li>${esc(i)}</li>`).join('')}
      </ul>

      <h2>How it works</h2>
      <ol class="steps" style="margin-top:1.5rem">
        ${s.process
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

      <h2>Common questions</h2>
      ${faqList(d, s.faqs, { open: -1 })}

      <h2>Other services you may need</h2>
      <p>Most jobs touch more than one trade. These are the ones most often combined with ${esc(s.title.toLowerCase())}:</p>
      <ul class="areas" style="margin-top:1rem">
        ${others
          .slice(0, 6)
          .map(
            (x) =>
              `<li>${icon(x.icon, { size: 15 })}<a href="${rel(d, `/services/${x.slug}`)}">${esc(x.short)}</a></li>`,
          )
          .join('')}
      </ul>
    </div>
    <aside class="svc-aside">
      ${asideContact}
      ${asideNav}
    </aside>
  </div>
</section>`,
      relatedBlock,
      ctaBand(d, {
        title: `Need ${s.title.toLowerCase()}?`,
        text: 'Send photos and a short description and we will come back with a fixed price. Surveys and quotations are free and carry no obligation.',
      }),
    ].join('\n'),
  };
}

export default [hub(), ...services.map(detail)];
