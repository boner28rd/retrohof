import { site, coverage } from '../data/site.mjs';
import { services } from '../data/services.mjs';
import { sectors, testimonials } from '../data/content.mjs';
import { projects } from '../data/projects.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import {
  sectionHead, serviceGrid, ctaBand, statBand, processSteps, credentialGrid,
} from '../components.mjs';

const d = 0;

const slides = [
  {
    img: '/assets/img/hero/hero-1.jpg',
    eyebrow: 'Property maintenance, southern England',
    title: 'Every trade you need,<br><em>one number to call</em>',
    text: 'Repairs, decorating, roofing, plumbing and full refurbishments — delivered by one team, to a fixed price, with a twelve-month guarantee behind the work.',
  },
  {
    img: '/assets/img/hero/hero-2.jpg',
    eyebrow: 'Landlords & agents',
    title: 'Void turnarounds<br><em>measured in days</em>',
    text: 'Clean, repair, redecorate and certify between tenancies — programmed to a date you can give the agent, with the compliance pack on completion.',
  },
  {
    img: '/assets/img/hero/hero-3.jpg',
    eyebrow: 'Refurbishment & renovation',
    title: 'Bigger projects,<br><em>properly managed</em>',
    text: 'One programme, one point of contact, one invoice — instead of six subcontractors each blaming the last one.',
  },
];

const trust = [
  ['clock', 'Fast response', 'Routine work booked within a week. Urgent repairs same or next working day.'],
  ['pound', 'Fixed, honest pricing', 'Free surveys, written quotations, and no variation without your written agreement.'],
  ['shield', 'Insured & certified', 'Public liability cover, Gas Safe engineers and registered electricians.'],
  ['check', '12-month guarantee', 'If something we did is not right, we come back and put it right.'],
];

function heroSection() {
  return `
<section class="hero" aria-label="Introduction">
  <div class="hero__slides">
    ${slides
      .map(
        (s, i) => `
    <div class="hero__slide${i === 0 ? ' is-active' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${slides.length}">
      <img class="hero__img" src="${rel(d, s.img)}" alt="" width="1920" height="1080" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
      <div class="hero__scrim"></div>
    </div>`,
      )
      .join('')}
    <div class="hero__body">
      <div class="wrap">
        <div class="hero__inner">
          <div class="hero__stack">
            ${slides
              .map(
                (s, i) => `
            <div class="hero__copy${i === 0 ? ' is-active' : ''}">
              <p class="eyebrow eyebrow--light">${esc(s.eyebrow)}</p>
              ${i === 0 ? `<h1 class="hero__title">${s.title}</h1>` : `<p class="hero__title">${s.title}</p>`}
              <p class="hero__text">${esc(s.text)}</p>
            </div>`,
              )
              .join('')}
          </div>
          <div class="hero__actions">
            <a class="btn btn--primary btn--lg" href="${rel(d, '/contact')}">Request a free quote</a>
            <a class="btn btn--outline-light btn--lg" href="${site.phone.href}">${icon('phone', { size: 18 })}${site.phone.display}</a>
          </div>
          <ul class="hero__ticks">
            <li>${icon('check', { size: 16 })}No hidden fees</li>
            <li>${icon('check', { size: 16 })}Fully insured</li>
            <li>${icon('check', { size: 16 })}${esc(site.hours)}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <ul class="hero__dots" role="tablist" aria-label="Choose a slide">
    ${slides
      .map(
        (s, i) =>
          `<li role="presentation"><button class="hero__dot" type="button" role="tab" aria-selected="${i === 0}" aria-label="Slide ${i + 1}"></button></li>`,
      )
      .join('')}
  </ul>
</section>

<section class="trust">
  <div class="wrap trust__grid">
    ${trust
      .map(
        ([ic, t, b]) => `
    <div class="trust__item">${icon(ic, { size: 22 })}<div><strong>${esc(t)}</strong><span>${esc(b)}</span></div></div>`,
      )
      .join('')}
  </div>
</section>`;
}

function intro() {
  return `
<section class="sec">
  <div class="wrap cols cols--2 cols--7-5">
    <div>
      <p class="eyebrow">Welcome to RetroHof</p>
      <h2 class="sec-head__title">Property maintenance without the chasing</h2>
      <p class="lead">Most property problems are not complicated. They are just tedious to organise — three quotes, two no-shows, and a job that still is not booked a fortnight later.</p>
      <p>RetroHof exists to remove that. We are a multi-trade property maintenance company based in ${esc(site.address.locality)}, working across ${esc(site.regionPhrase)} — from Hertfordshire in the north to Devon in the south west. Whether it is a single leaking tap, a full void turnaround before a new tenancy, or a commercial unit being handed back to a landlord, it is the same team, the same standard and the same point of contact.</p>
      <ul class="ticks ticks--2">
        <li>Every trade under one roof, so nobody passes the job on</li>
        <li>Written, itemised quotations before anything starts</li>
        <li>Photographic records on every completed job</li>
        <li>Direct tenant liaison with your authority</li>
      </ul>
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/services')}">Explore our services</a>
        <a class="btn btn--ghost" href="${rel(d, '/about')}">About the company</a>
      </div>
    </div>
    <div class="cols__media cols__media--stack cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/about/onsite.jpg')}" alt="RetroHof tradesperson working on site" width="1400" height="1000" loading="lazy">
      <img src="${rel(d, '/assets/img/about/tools.jpg')}" alt="Organised tool kit ready for a maintenance visit" width="1400" height="1000" loading="lazy">
      <img src="${rel(d, '/assets/img/misc/trust.jpg')}" alt="Handshake at the end of a completed job" width="1200" height="800" loading="lazy">
    </div>
  </div>
</section>`;
}

function servicesSection() {
  return `
<section class="sec sec--tint" id="services">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'What we do',
      title: 'Reliable property solutions, end to end',
      lead: 'Ten core services covering everything a home, rental or commercial property needs — available individually, or bundled into a single managed programme.',
    })}
    ${serviceGrid(d, services)}
    <div class="actions actions--center mt-2">
      <a class="btn btn--outline" href="${rel(d, '/services')}">See all services in detail</a>
    </div>
  </div>
</section>`;
}

function whySection() {
  return `
<section class="sec sec--dark">
  <div class="wrap cols cols--2 cols--5-7 cols--media-first">
    <div class="cols__media cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/about/survey.jpg')}" alt="Supervisor carrying out a property condition survey" width="1400" height="1000" loading="lazy">
      <div class="badge-float"><strong>12 mth</strong><span>workmanship guarantee on every job we complete</span></div>
    </div>
    <div>
      <p class="eyebrow">Why RetroHof</p>
      <h2 class="sec-head__title">The boring things, done properly</h2>
      <p class="sec-head__lead">Turning up when we said. Pricing what we quoted. Clearing up afterwards. None of it is remarkable — which is exactly why it is worth choosing a firm that does it every time.</p>
      ${credentialGrid()}
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/contact')}">Talk to us about your property</a>
      </div>
    </div>
  </div>
</section>`;
}

function sectorsSection() {
  return `
<section class="sec">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Who we help',
      title: 'Built around how you actually work',
      lead: 'A homeowner, a landlord with three flats and a managing agent with three hundred all need different things from a maintenance contractor.',
    })}
    <div class="sector-grid">
      ${sectors
        .map(
          (s) => `
      <article class="sector">
        <span class="sector__icon">${icon(s.icon, { size: 26 })}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.summary)}</p>
        <ul>${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </article>`,
        )
        .join('')}
    </div>
    <div class="actions actions--center mt-2">
      <a class="btn btn--outline" href="${rel(d, '/sectors')}">How we work with each</a>
    </div>
  </div>
</section>`;
}

function projectsSection() {
  const featured = projects.slice(0, 3);
  return `
<section class="sec sec--tint">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Recent work',
      title: 'Projects across southern England',
      lead: 'A sample of the kind of work we take on — from single-room repairs to whole-property refurbishments.',
    })}
    <div class="proj-grid">
      ${featured
        .map(
          (p) => `
      <article class="proj reveal">
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
    <div class="actions actions--center mt-2">
      <a class="btn btn--outline" href="${rel(d, '/projects')}">See all projects</a>
    </div>
  </div>
</section>`;
}

function testimonialSection() {
  if (!testimonials.length) return '';
  return `
<section class="sec">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'What clients say',
      title: 'Judged on the follow-up, not the sales pitch',
    })}
    <div class="quotes">
      ${testimonials
        .map(
          (t) => `
      <figure class="quote${t.placeholder ? ' quote--placeholder' : ''}">
        <span class="quote__mark">${icon('quote', { size: 30 })}</span>
        <div class="quote__stars" role="img" aria-label="5 out of 5">${icon('star', { size: 16 }).repeat(5)}</div>
        <blockquote><p>${esc(t.quote)}</p></blockquote>
        <figcaption class="quote__by">${esc(t.attribution)}</figcaption>
      </figure>`,
        )
        .join('')}
    </div>
  </div>
</section>`;
}

function areasSection() {
  return `
<section class="sec sec--tint">
  <div class="wrap cols cols--2 cols--7-5">
    <div>
      <p class="eyebrow">Where we work</p>
      <h2 class="sec-head__title">Local to ${esc(site.address.locality)}, working across ${esc(site.regionPhrase)}</h2>
      <p class="sec-head__lead">${esc(site.coverageSummary)}</p>
      <p>Around ${esc(site.address.region)} and south-west London that means same-morning response and a team that knows the housing stock. Further afield it means planned refurbishment and contract work, surveyed properly and programmed in blocks — not a call-out squeezed between local jobs.</p>
      <ul class="ticks">
        ${coverage.map((c) => `<li><strong>${esc(c.title)}</strong> — ${esc(c.counties.join(', '))}</li>`).join('')}
      </ul>
      <div class="actions">
        <a class="btn btn--outline" href="${rel(d, '/areas')}">Check your area</a>
      </div>
    </div>
    <div class="cols__media cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/projects/exterior.jpg')}" alt="Detached property after exterior maintenance work" width="1200" height="900" loading="lazy">
    </div>
  </div>
</section>`;
}

export default {
  url: '/',
  file: 'index.html',
  depth: 0,
  title: `Property Maintenance | Surrey & Southern England | ${site.legalName}`,
  description:
    'RetroHof provides multi-trade property maintenance across southern England, from our Surrey base — repairs, decorating, roofing, plumbing, electrical work and full refurbishments. Fixed prices, fully insured, 12-month guarantee.',
  ogImage: '/assets/img/hero/hero-1.jpg',
  body: [
    heroSection(),
    intro(),
    servicesSection(),
    statBand(),
    whySection(),
    processSteps({
      eyebrow: 'Our process',
      title: 'Four steps, no surprises',
      lead: 'From the first phone call to the final walk-round, you always know what happens next.',
    }),
    sectorsSection(),
    projectsSection(),
    testimonialSection(),
    areasSection(),
    ctaBand(d),
  ].join('\n'),
};
