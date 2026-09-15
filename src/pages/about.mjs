import { site } from '../data/site.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import {
  banner, sectionHead, ctaBand, statBand, processSteps, credentialGrid,
} from '../components.mjs';

const d = 1;

const values = [
  ['clock', 'Turn up when we said', 'If we are going to be late, you hear it from us before you have to ask. Appointment windows, not "sometime Tuesday".'],
  ['pound', 'Charge what we quoted', 'The quotation is the price. Variations are priced and agreed in writing before the work is done, never afterwards.'],
  ['wrench', 'Fix the cause, not the symptom', 'Redecorating over damp is cheaper this year and more expensive every year after. We will tell you which one you are buying.'],
  ['shield', 'Leave it safe and clean', 'Protection down, waste taken away, and the property left in a state you would be happy to walk into.'],
];

export default {
  url: '/about',
  file: 'about/index.html',
  depth: d,
  title: `About RetroHof | Property Maintenance in ${site.address.region}`,
  description:
    'RetroHof is a multi-trade property maintenance company based in Hersham, Surrey — working for homeowners, landlords, managing agents and businesses across southern England, from Hertfordshire to Devon.',
  ogImage: '/assets/img/banner/about.jpg',
  breadcrumbs: [{ label: 'About', href: '/about' }],
  body: [
    banner(d, {
      eyebrow: 'About us',
      title: 'A maintenance firm built to be easy to deal with',
      lead: 'Multi-trade property maintenance from a local team, with the admin, compliance and chasing taken off your plate.',
      image: '/assets/img/banner/about.jpg',
      breadcrumbs: [{ label: 'About', href: '/about' }],
    }),
    `
<section class="sec">
  <div class="wrap cols cols--2 cols--7-5">
    <div>
      <p class="eyebrow">Who we are</p>
      <h2 class="sec-head__title">Every trade, one accountable team</h2>
      <p class="lead">RetroHof is a property maintenance company based in ${esc(site.address.locality)}, ${esc(site.address.region)}, working across ${esc(site.regionPhrase)}.</p>
      <p>${esc(site.coverageSummary)}</p>
      <p>We were set up around a simple observation: the hard part of property maintenance is almost never the work itself. It is finding someone who answers the phone, turns up, prices honestly and finishes. Most people have a plumber they trust and nobody else — so every other job becomes a research project.</p>
      <p>We put the trades under one roof so that stops being your problem. A leak, a repaint, a new consumer unit and a garden clearance are one phone call, one quotation and one invoice. For landlords and agents, that difference compounds across a portfolio into genuinely significant time saved.</p>
      <p>We are deliberately not the cheapest. We are insured, certificated, and we come back if something is not right — and over the life of a property that works out considerably cheaper than the alternative.</p>
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/contact')}">Work with us</a>
        <a class="btn btn--ghost" href="${rel(d, '/services')}">What we do</a>
      </div>
    </div>
    <div class="cols__media cols__media--stack cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/about/team.jpg')}" alt="RetroHof team reviewing works on site" width="1400" height="1000" loading="lazy">
      <img src="${rel(d, '/assets/img/about/onsite.jpg')}" alt="Carpenter cutting timber during a fit-out" width="1400" height="1000" loading="lazy">
      <img src="${rel(d, '/assets/img/about/tools.jpg')}" alt="Tools laid out ready for a maintenance visit" width="1400" height="1000" loading="lazy">
    </div>
  </div>
</section>`,
    statBand(),
    `
<section class="sec sec--tint">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'How we behave',
      title: 'Four things we will not compromise on',
      lead: 'None of these are impressive. All of them are the reason clients stay.',
    })}
    <div class="sector-grid">
      ${values
        .map(
          ([ic, t, b]) => `
      <article class="sector">
        <span class="sector__icon">${icon(ic, { size: 26 })}</span>
        <h3>${esc(t)}</h3>
        <p>${esc(b)}</p>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`,
    `
<section class="sec sec--dark">
  <div class="wrap cols cols--2 cols--5-7 cols--media-first">
    <div class="cols__media cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/about/survey.jpg')}" alt="Property condition survey being carried out" width="1400" height="1000" loading="lazy">
    </div>
    <div>
      <p class="eyebrow">Cover &amp; compliance</p>
      <h2 class="sec-head__title">The paperwork, handled</h2>
      <p class="sec-head__lead">Insurance certificates, registration numbers and test certificates are supplied without being chased. For managing agents and commercial clients we provide the full pack before the first job.</p>
      ${credentialGrid()}
    </div>
  </div>
</section>`,
    processSteps({
      eyebrow: 'Working with us',
      title: 'What happens after you get in touch',
      lead: 'The same four steps for a half-day of handyman work and a twelve-week refurbishment.',
    }),
    `
<section class="sec">
  <div class="wrap cols cols--2 cols--7-5">
    <div>
      <p class="eyebrow">The name</p>
      <h2 class="sec-head__title">Why "RetroHof"?</h2>
      <p><em>Retro</em> — going back, putting right, restoring something to the condition it should have been in. <em>Hof</em> — the old word for a yard, a homestead, the ground a building stands on.</p>
      <p>Between them they describe most of what we actually do: taking properties that have been neglected, patched or bodged, and quietly putting them back in order. Not glamorous, but it is the work that keeps buildings standing and tenants happy.</p>
      <div class="actions">
        <a class="btn btn--outline" href="${rel(d, '/projects')}">See the work</a>
      </div>
    </div>
    <div class="cols__media cols__media--fill reveal">
      <img src="${rel(d, '/assets/img/services/refurbishment.jpg')}" alt="Refurbished interior after completion" width="1200" height="900" loading="lazy">
    </div>
  </div>
</section>`,
    ctaBand(d, {
      eyebrow: 'Get started',
      title: 'One number for the whole property',
      text: 'Call, email or send the enquiry form. We will tell you honestly whether we are the right firm for the job.',
    }),
  ].join('\n'),
};
