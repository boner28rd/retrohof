import { site } from '../data/site.mjs';
import { projects, projectCategories } from '../data/projects.mjs';
import { serviceBySlug } from '../data/services.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import { banner, sectionHead, ctaBand } from '../components.mjs';

const d = 0;

const catLabel = (id) => (projectCategories.find((c) => c.id === id) || { label: id }).label;

function card(p, i) {
  const detailId = `proj-detail-${i}`;
  return `
<article class="proj" id="${esc(p.slug)}" data-category="${esc(p.category)}">
  <div class="proj__media">
    <img src="${rel(d, p.image)}" alt="${esc(p.imageAlt)}" width="1200" height="900" loading="lazy">
    <span class="proj__tag">${esc(catLabel(p.category))}</span>
  </div>
  <div class="proj__body">
    <h3 class="proj__title">${esc(p.title)}</h3>
    <div class="proj__meta">
      <span>${icon('pin', { size: 14 })}${esc(p.location)}</span>
      <span>${icon('calendar', { size: 14 })}${esc(p.duration)}</span>
    </div>
    <p class="proj__summary">${esc(p.summary)}</p>
    <button class="proj__toggle" type="button" aria-expanded="false" aria-controls="${detailId}">
      <span class="proj__toggle-label">View details</span>${icon('chevron', { size: 16 })}
    </button>
  </div>
  <div class="proj__detail" id="${detailId}" hidden>
    <h4>Scope of works</h4>
    <ul>${p.scope.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    <h4>Outcome</h4>
    <p>${esc(p.outcome)}</p>
    <div class="proj__svcs">
      ${p.services
        .map((slug) => {
          const s = serviceBySlug[slug];
          return s ? `<a href="${rel(d, `/services/${slug}`)}">${esc(s.short)}</a>` : '';
        })
        .join('')}
    </div>
  </div>
</article>`;
}

export default {
  url: '/projects',
  file: 'projects.html',
  depth: d,
  title: `Projects & Case Studies | ${site.legalName}`,
  description:
    'Examples of property maintenance and refurbishment work carried out by RetroHof across Surrey — kitchens, bathrooms, void turnarounds, roofline replacement, communal areas and commercial units.',
  ogImage: '/assets/img/banner/projects.jpg',
  breadcrumbs: [{ label: 'Projects', href: '/projects' }],
  // Kept out of search results while the case studies below are still
  // placeholders. Remove this line once they are replaced with real jobs.
  // `noindex, follow` rather than a robots.txt block: crawlers still need to
  // fetch the page to see the directive, and the outbound links still count.
  noindex: true,
  body: [
    banner(d, {
      eyebrow: 'Our work',
      title: 'Projects &amp; case studies',
      lead: 'A cross-section of the work we take on — what the job involved, how long it took, and what it actually achieved for the property.',
      image: '/assets/img/banner/projects.jpg',
      breadcrumbs: [{ label: 'Projects', href: '/projects' }],
    }),
    `
<section class="sec">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Recent work',
      title: 'Every job, documented',
      lead: 'Filter by the type of property or work. Expand any project to see the full scope and the outcome.',
    })}

    <div class="filters" role="group" aria-label="Filter projects by type">
      ${projectCategories
        .map(
          (c, i) =>
            `<button class="filter" type="button" data-filter="${esc(c.id)}" aria-pressed="${i === 0}">${esc(c.label)}</button>`,
        )
        .join('')}
    </div>

    <div class="proj-grid" id="project-grid">
      ${projects.map(card).join('')}
    </div>
    <p class="empty-note" id="filter-empty" hidden>No projects in that category yet — try another filter.</p>
  </div>
</section>`,
    `
<section class="sec sec--tint">
  <div class="wrap cols cols--2 cols--5-7 cols--media-first">
    <div class="cols__media reveal">
      <img src="${rel(d, '/assets/img/misc/trust.jpg')}" alt="Handshake on completion of a project" width="1200" height="800" loading="lazy">
    </div>
    <div>
      <p class="eyebrow">What you get on every job</p>
      <h2 class="sec-head__title">A record, not just an invoice</h2>
      <p class="sec-head__lead">Every completed job leaves a paper trail, which matters far more than it sounds when there is a deposit dispute, an insurance claim or a sale two years later.</p>
      <ul class="ticks ticks--2">
        <li>Before and after photographs of the work</li>
        <li>Itemised invoice matched to the original quotation</li>
        <li>Certificates for any notifiable electrical or gas work</li>
        <li>Manufacturer guarantees on materials and appliances</li>
        <li>Waste transfer documentation where required</li>
        <li>Twelve months of workmanship cover</li>
      </ul>
      <div class="actions">
        <a class="btn btn--primary" href="${rel(d, '/contact')}">Start a project</a>
        <a class="btn btn--ghost" href="${rel(d, '/services')}">Browse services</a>
      </div>
    </div>
  </div>
</section>`,
    ctaBand(d, {
      eyebrow: 'Your project next',
      title: 'Tell us what you are planning',
      text: 'Whether it is one room or a whole property, we will survey it, price it properly and give you a programme you can hold us to.',
    }),
  ].join('\n'),
};
