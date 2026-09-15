import { site, coverage } from '../data/site.mjs';
import { services } from '../data/services.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import { banner, sectionHead, ctaBand } from '../components.mjs';

const d = 0;

export default {
  url: '/areas',
  file: 'areas.html',
  depth: d,
  title: `Areas We Cover | Surrey to Devon, Kent & Hertfordshire | ${site.legalName}`,
  description:
    'RetroHof covers Surrey and south-west London, north to Hertfordshire, east into Kent and Sussex, and west through Hampshire and Dorset as far as Devon and Plymouth.',
  ogImage: '/assets/img/banner/areas.jpg',
  breadcrumbs: [{ label: 'Areas', href: '/areas' }],
  body: [
    banner(d, {
      eyebrow: 'Coverage',
      title: 'Areas we cover',
      lead: `Based in ${esc(site.address.locality)}, ${esc(site.address.region)}, working across ${esc(site.regionPhrase)} — from Hertfordshire down to the Sussex coast and west as far as Plymouth.`,
      image: '/assets/img/banner/areas.jpg',
      breadcrumbs: [{ label: 'Areas', href: '/areas' }],
    }),
    `
<section class="sec">
  <div class="wrap cols cols--2 cols--7-5">
    <div>
      <p class="eyebrow">Local base, long reach</p>
      <h2 class="sec-head__title">A Surrey yard, a southern England footprint</h2>
      <p class="lead">${esc(site.coverageSummary)}</p>
      <p>Those two things do different jobs. Around ${esc(site.address.locality)} we are close enough for a van to be with you the same morning, which is what reactive maintenance actually requires — and close enough to know the housing stock, which shortens a lot of diagnosis.</p>
      <p>Further out, the work looks different. A refurbishment in Dorset or a portfolio in Kent is planned work: surveyed properly, programmed in blocks, and staffed for the duration rather than squeezed between local call-outs. We would rather tell you that plainly than pretend a Plymouth job gets a Hersham response time.</p>
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/contact')}">Check your postcode</a>
        <a class="btn btn--ghost" href="${site.phone.href}">${icon('phone', { size: 18 })}${site.phone.display}</a>
      </div>
    </div>
    <div class="cols__media cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/projects/exterior.jpg')}" alt="Property maintained by RetroHof" width="960" height="720" loading="lazy">
    </div>
  </div>
</section>`,
    `
<section class="sec sec--tint">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Coverage by region',
      title: 'Where we work, and how it works',
      lead: 'Response times depend on distance, so we are upfront about what each region gets.',
    })}
    <div class="sector-grid">
      ${coverage
        .map(
          (z) => `
      <article class="sector">
        <span class="sector__icon">${icon('pin', { size: 26 })}</span>
        <h3>${esc(z.title)}</h3>
        <p>${esc(z.note)}</p>
        <p class="areas-counties"><strong>Counties:</strong> ${z.counties.map(esc).join(', ')}</p>
        ${
          z.places.length
            ? `<p class="areas-counties"><strong>Towns include:</strong> ${z.places.map(esc).join(' &middot; ')}</p>`
            : ''
        }
      </article>`,
        )
        .join('')}
    </div>
    <div class="note mt-2">
      <strong>Somewhere in between?</strong> We travel through most of the counties between these points. Postcode boundaries never match real life &mdash; call ${esc(site.phone.display)} and we will tell you straight away whether we cover you, and whether we are the right firm for the job.
    </div>
  </div>
</section>`,
    `
<section class="sec">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Everything we do, everywhere we go',
      title: 'The full service, across the whole footprint',
      lead: 'Coverage is not limited by service — every trade below is available anywhere we work, though larger jobs further out are programmed rather than booked same-week.',
    })}
    <ul class="areas">
      ${services
        .map(
          (s) =>
            `<li>${icon(s.icon, { size: 15 })}<a href="${rel(d, `/services/${s.slug}`)}">${esc(s.short)}</a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`,
    ctaBand(d, {
      eyebrow: 'Wherever you are',
      title: 'Tell us where the property is',
      text: 'Free survey, written quotation, no obligation — and an honest answer about timescales for your location.',
    }),
  ].join('\n'),
};
