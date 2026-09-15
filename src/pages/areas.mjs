import { site } from '../data/site.mjs';
import { services } from '../data/services.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import { banner, sectionHead, ctaBand } from '../components.mjs';

const d = 0;

const zones = [
  {
    title: 'Elmbridge — our home patch',
    note: 'Same-day attendance for urgent work in most cases.',
    places: ['Hersham', 'Walton-on-Thames', 'Weybridge', 'Esher', 'Cobham', 'Oxshott', 'Claygate', 'Thames Ditton', 'East Molesey', 'West Molesey', 'Molesey', 'Whiteley Village'],
  },
  {
    title: 'North Surrey & the river',
    note: 'Regular scheduled visits; urgent work next working day.',
    places: ['Byfleet', 'West Byfleet', 'Addlestone', 'Chertsey', 'Shepperton', 'Sunbury-on-Thames', 'Ashford', 'Staines-upon-Thames', 'Egham', 'Woking'],
  },
  {
    title: 'South-west London boroughs',
    note: 'Covered for planned work and contract clients.',
    places: ['Kingston upon Thames', 'Surbiton', 'New Malden', 'Hampton', 'Teddington', 'Twickenham', 'Richmond', 'Wimbledon'],
  },
  {
    title: 'Wider Surrey',
    note: 'Larger projects and contract work — ask and we will be straight with you.',
    places: ['Epsom', 'Ewell', 'Leatherhead', 'Ashtead', 'Bookham', 'Dorking', 'Guildford', 'Banstead'],
  },
];

export default {
  url: '/areas',
  file: 'areas.html',
  depth: d,
  title: `Areas We Cover in Surrey | ${site.legalName}`,
  description:
    'RetroHof covers Hersham, Walton-on-Thames, Weybridge, Esher, Cobham, Kingston, Epsom and the wider Surrey and south-west London area for property maintenance and repairs.',
  ogImage: '/assets/img/banner/areas.jpg',
  breadcrumbs: [{ label: 'Areas', href: '/areas' }],
  body: [
    banner(d, {
      eyebrow: 'Coverage',
      title: 'Areas we cover',
      lead: `Based in ${esc(site.address.locality)} and working across ${esc(site.address.region)} and the neighbouring south-west London boroughs.`,
      image: '/assets/img/banner/areas.jpg',
      breadcrumbs: [{ label: 'Areas', href: '/areas' }],
    }),
    `
<section class="sec">
  <div class="wrap cols cols--2 cols--7-5">
    <div>
      <p class="eyebrow">Genuinely local</p>
      <h2 class="sec-head__title">Close enough to be there this morning</h2>
      <p class="lead">A maintenance contractor forty minutes away is a different service from one twelve minutes away, whatever the website says.</p>
      <p>We work in a deliberately tight radius around ${esc(site.address.locality)} so that urgent work can actually be urgent. It also means we know the housing stock: which estates have the same failing boiler, which streets flood, which Victorian terraces have the same sash window problem. That knowledge shortens a lot of diagnosis.</p>
      <p>If you are just outside our usual patch, ask anyway. For larger projects and contract work we travel further, and if we are genuinely not the right firm for the job we will say so rather than quote and hope.</p>
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/contact')}">Check your postcode</a>
        <a class="btn btn--ghost" href="${site.phone.href}">${icon('phone', { size: 18 })}${site.phone.display}</a>
      </div>
    </div>
    <div class="cols__media reveal">
      <img src="${rel(d, '/assets/img/projects/exterior.jpg')}" alt="Surrey property maintained by RetroHof" width="1200" height="900" loading="lazy">
    </div>
  </div>
</section>`,
    `
<section class="sec sec--tint">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Coverage by zone',
      title: 'Where our vans are, and how fast',
      lead: 'Response times depend on distance, so we are upfront about which areas get what.',
    })}
    <div class="sector-grid">
      ${zones
        .map(
          (z) => `
      <article class="sector">
        <span class="sector__icon">${icon('pin', { size: 26 })}</span>
        <h3>${esc(z.title)}</h3>
        <p>${esc(z.note)}</p>
        <ul>${z.places.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`,
    `
<section class="sec">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Everything we do, everywhere we go',
      title: 'The full service, across the whole area',
      lead: 'Coverage is not limited by service — every trade below is available anywhere we work.',
    })}
    <ul class="areas">
      ${services
        .map(
          (s) =>
            `<li>${icon(s.icon, { size: 15 })}<a href="${rel(d, `/services/${s.slug}`)}">${esc(s.short)}</a></li>`,
        )
        .join('')}
    </ul>
    <div class="note mt-2">
      <strong>Not on the list?</strong> Postcode boundaries never match real life. Call ${esc(site.phone.display)} or send the enquiry form and we will confirm straight away whether we cover you.
    </div>
  </div>
</section>`,
    ctaBand(d, {
      eyebrow: 'Local to you',
      title: 'Book a visit in your area',
      text: 'Free survey, written quotation, no obligation — and an honest answer about timescales.',
    }),
  ].join('\n'),
};
