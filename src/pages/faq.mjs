import { site } from '../data/site.mjs';
import { faqGroups } from '../data/content.mjs';
import { esc, rel } from '../layout.mjs';
import { banner, sectionHead, ctaBand, faqList } from '../components.mjs';

const d = 1;

const all = faqGroups.flatMap((g) => g.items);

export default {
  url: '/faq',
  file: 'faq/index.html',
  depth: d,
  title: `Frequently Asked Questions | ${site.legalName}`,
  description:
    'Answers to common questions about RetroHof property maintenance — quotations, pricing, response times, insurance, guarantees, certificates and the areas we cover.',
  ogImage: '/assets/img/banner/faq.jpg',
  breadcrumbs: [{ label: 'FAQs', href: '/faq' }],
  faqSchema: all,
  body: [
    banner(d, {
      eyebrow: 'Answers',
      title: 'Frequently asked questions',
      lead: 'Prices, timescales, insurance, guarantees and how we actually work. If your question is not here, just ask.',
      image: '/assets/img/banner/faq.jpg',
      breadcrumbs: [{ label: 'FAQs', href: '/faq' }],
    }),
    `
<section class="sec">
  <div class="wrap" style="max-width:min(64rem, 100%)">
    ${sectionHead({
      eyebrow: 'Before you call',
      title: 'The questions we get asked most',
      lead: 'Grouped by subject. Everything here is how we genuinely operate — if we ever fall short of it, tell us.',
      align: 'left',
    })}
    <div class="faq-groups">
      ${faqGroups
        .map(
          (g) => `
      <div class="faq-group">
        <h2 class="faq-group__title">${esc(g.title)}</h2>
        ${faqList(d, g.items, { open: -1 })}
      </div>`,
        )
        .join('')}
    </div>

    <div class="note mt-2">
      <strong>Still not answered?</strong> Call <a href="${site.phone.href}">${esc(site.phone.display)}</a>, email <a href="mailto:${site.email}">${esc(site.email)}</a> or <a href="${rel(d, '/contact')}">send an enquiry</a>. We would rather answer a question before a job than argue about it afterwards.
    </div>
  </div>
</section>`,
    ctaBand(d, {
      eyebrow: 'Ready to book?',
      title: 'Get a free, no-obligation quotation',
      text: 'Send a description and a couple of photographs and we will come back with a fixed price.',
    }),
  ].join('\n'),
};
