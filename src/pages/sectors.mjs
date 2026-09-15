import { site } from '../data/site.mjs';
import { sectors } from '../data/content.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import { banner, sectionHead, ctaBand } from '../components.mjs';

const d = 0;

// `headline` is the section heading — keep it short. The longer sentence that
// used to be the heading now runs as `lead` underneath it, and each section
// gets one body paragraph rather than two.
const detail = {
  homeowners: {
    headline: 'Done once, done properly',
    lead: 'You want the job done well, and you do not want to project-manage it.',
    body: [
      'Most homeowners call us with a list rather than a single job — a door that sticks, a tap that drips, a room that has needed painting for two years. Individually none of them justifies chasing a specialist; together they are a day’s work. For bigger jobs we run the whole thing and keep the house liveable while we do it.',
    ],
    bullets: [
      'Half-day and full-day handyman visits for lists of small jobs',
      'Whole-room and whole-house refurbishment, managed end to end',
      'Work planned around children, pets and people working from home',
      'Fixed prices agreed in writing before anything starts',
      'Floors and furniture protected daily; the site left clean',
    ],
  },
  landlords: {
    headline: 'Less void time, less risk',
    lead: 'Void time is the expensive part. Compliance is the risky part.',
    body: [
      'An empty property costs you rent every week, and one that is not compliant costs considerably more than that. We turn voids around to a date rather than an estimate, and hand over the certificates as a single pack so nothing is missing when the agent asks. For portfolios we can hold keys, deal directly with tenants and invoice monthly against agreed rates.',
    ],
    bullets: [
      'Void turnarounds to a fixed date, not an estimate',
      'EICR, gas safety and alarm compliance in one visit',
      'Direct tenant liaison, so you are not the go-between',
      'Photographic evidence on completion',
      'Consolidated monthly invoicing across a portfolio',
    ],
  },
  agents: {
    headline: 'Fewer open items on your desk',
    lead: 'A contractor should reduce the number of things you are chasing, not add to them.',
    body: [
      'Works orders are acknowledged the same working day with an expected attendance date, and once a job is booked you do not need to chase it. Every managed property gets a named account contact who knows its history — which matters when the same flat has had three different leaks in two years.',
    ],
    bullets: [
      'Named account contact and agreed response times',
      'Works orders acknowledged same working day',
      '24/7 emergency line for managed properties',
      'Monthly invoicing with a per-property breakdown',
      'Insurance and registration documents up front',
    ],
  },
  businesses: {
    headline: 'Work that fits your trading hours',
    lead: 'Maintenance planned around when you are open, instead of interrupting it.',
    body: [
      'Commercial clients rarely want work done between nine and five, so we plan around your trading pattern — evenings, weekends, or phased so part of the space stays usable throughout. We handle reactive repairs and planned programmes, with method statements and risk assessments provided as standard for work in occupied premises.',
    ],
    bullets: [
      'Evening and weekend working to avoid lost trading',
      'Planned maintenance schedules with annual budgets',
      'Fit-out, partitioning and end-of-lease reinstatement',
      'RAMS, insurance and waste documentation as standard',
      'One contractor across every trade the premises needs',
    ],
  },
  blocks: {
    headline: 'Common parts, properly kept',
    lead: 'Communal areas that residents stop complaining about.',
    body: [
      'Common parts are judged by everyone who walks through them and paid for by everyone who lives there, which makes them unusually sensitive. We work to a published schedule, post notices before access is needed, and phase works so there is always a safe, lit route in and out.',
    ],
    bullets: [
      'Cyclical redecoration against a written specification',
      'Communal cleaning and grounds on a fixed schedule',
      'Fire door, emergency lighting and handrail remedials',
      'Resident notices and phased access planning',
      'Annual budgets split into twelve equal payments',
    ],
  },
};

export default {
  url: '/sectors',
  file: 'sectors.html',
  depth: d,
  title: `Who We Work With | ${site.legalName}`,
  description:
    'RetroHof works with homeowners, landlords, letting and managing agents, businesses and block management companies across southern England — each with a service shaped around how they actually operate.',
  ogImage: '/assets/img/banner/sectors.jpg',
  breadcrumbs: [{ label: 'Who We Help', href: '/sectors' }],
  body: [
    banner(d, {
      eyebrow: 'Who we help',
      title: 'Shaped around how you work',
      lead: 'A homeowner with a list, a landlord with a void and an agent with three hundred properties all need something different from a maintenance contractor.',
      image: '/assets/img/banner/sectors.jpg',
      breadcrumbs: [{ label: 'Who We Help', href: '/sectors' }],
    }),
    `
<section class="sec sec--tight">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Five kinds of client',
      title: 'Same standard, different service',
      lead: 'The trades are identical. What changes is the reporting, the response times and the way you are invoiced.',
    })}
    <div class="sector-grid">
      ${sectors
        .map(
          (s) => `
      <article class="sector">
        <span class="sector__icon">${icon(s.icon, { size: 26 })}</span>
        <h3><a href="#${esc(s.slug)}" style="color:inherit;text-decoration:none">${esc(s.title)}</a></h3>
        <p>${esc(s.summary)}</p>
        <ul>${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`,
    sectors
      .map((s, i) => {
        const dt = detail[s.slug];
        const flip = i % 2 === 1;
        return `
<section class="sec${i % 2 === 0 ? ' sec--tint' : ''}" id="${esc(s.slug)}">
  <div class="wrap cols cols--2 ${flip ? 'cols--5-7 cols--media-first' : 'cols--7-5'} cols--top">
    <div>
      <p class="eyebrow">${esc(s.title)}</p>
      <h2 class="sec-head__title">${esc(dt.headline)}</h2>
      <p class="sec-head__lead">${esc(dt.lead)}</p>
      ${dt.body.map((p) => `<p>${esc(p)}</p>`).join('')}
      <ul class="ticks">${dt.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/contact')}">Talk to us</a>
        <a class="btn btn--ghost" href="${rel(d, '/services')}">See services</a>
      </div>
    </div>
    <div class="cols__media cols__media--tall reveal">
      <img src="${rel(d, s.image)}" alt="${esc(s.title)} — example of RetroHof work" width="960" height="720" loading="lazy">
    </div>
  </div>
</section>`;
      })
      .join('\n'),
    ctaBand(d, {
      eyebrow: 'Whichever you are',
      title: 'Let us take the maintenance off your desk',
      text: 'Tell us what you look after and how you like to work, and we will tell you exactly how we would handle it.',
    }),
  ].join('\n'),
};
