import { site } from '../data/site.mjs';
import { services } from '../data/services.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';
import { banner, sectionHead, ctaBand } from '../components.mjs';

const d = 0;

const contactCards = [
  ['phone', 'Call us', `<a href="${site.phone.href}">${site.phone.display}</a>`, 'Fastest for anything urgent'],
  ['mail', 'Email us', `<a href="mailto:${site.email}">${site.email}</a>`, 'Replies within one working day'],
  ['clock', 'Opening hours', `<span>${esc(site.hours)}</span>`, esc(site.emergencyNote)],
  ['pin', 'Based in', `<span>${esc(site.address.locality)}, ${esc(site.address.region)}</span>`, `Covering ${esc(site.regionPhrase)}`],
];

function form() {
  return `
<form class="form-card" id="enquiry-form" novalidate
      ${site.formEndpoint ? `action="${site.formEndpoint}" method="post" data-endpoint="${site.formEndpoint}"` : 'action="#" method="post"'}
      data-email="${site.email}" data-phone="${site.phone.display}">
  <h2 class="mt-0">Request a quote</h2>
  <p class="lead" style="font-size:1rem">Tell us what needs doing. Photographs help enormously — you can attach them to a reply once we are in touch.</p>

  <div class="form-grid form-grid--2" style="margin-top:1.5rem">
    <div class="form-field">
      <label for="name">Your name <span class="req" aria-hidden="true">*</span></label>
      <input type="text" id="name" name="name" autocomplete="name" required>
      <p class="form-error" id="name-error" role="alert"></p>
    </div>
    <div class="form-field">
      <label for="email">Email address <span class="req" aria-hidden="true">*</span></label>
      <input type="email" id="email" name="email" autocomplete="email" required>
      <p class="form-error" id="email-error" role="alert"></p>
    </div>
    <div class="form-field">
      <label for="phone">Phone number</label>
      <input type="tel" id="phone" name="phone" autocomplete="tel">
      <p class="form-error" id="phone-error" role="alert"></p>
    </div>
    <div class="form-field">
      <label for="postcode">Property postcode</label>
      <input type="text" id="postcode" name="postcode" autocomplete="postal-code" placeholder="e.g. KT12">
      <span class="hint">So we can confirm we cover the area.</span>
    </div>

    <div class="form-field form-field--full">
      <label for="subject">I am a&hellip;</label>
      <select id="subject" name="subject">
        <option value="Homeowner">Homeowner</option>
        <option value="Landlord">Landlord</option>
        <option value="Letting or managing agent">Letting or managing agent</option>
        <option value="Business or commercial occupier">Business or commercial occupier</option>
        <option value="Block management company">Block management company</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div class="form-field form-field--full">
      <label id="services-label">Which services do you need? <span class="hint">(tick any that apply)</span></label>
      <div class="checks" role="group" aria-labelledby="services-label">
        ${services
          .map(
            (s) => `
        <label class="check"><input type="checkbox" name="services" value="${esc(s.slug)}"><span>${esc(s.short)}</span></label>`,
          )
          .join('')}
        <label class="check"><input type="checkbox" name="services" value="not-sure"><span>Not sure yet</span></label>
      </div>
    </div>

    <div class="form-field form-field--full">
      <label for="message">What needs doing? <span class="req" aria-hidden="true">*</span></label>
      <textarea id="message" name="message" required placeholder="A short description is plenty. Include anything time-sensitive — a tenancy start date, a sale, an insurance claim."></textarea>
      <p class="form-error" id="message-error" role="alert"></p>
    </div>

    <div class="form-field form-field--full">
      <label class="form-consent">
        <input type="checkbox" id="consent" name="consent" value="yes" required>
        <span>I am happy for ${esc(site.legalName)} to use these details to reply to my enquiry. See our <a href="${rel(d, '/privacy')}">privacy policy</a>.</span>
      </label>
      <p class="form-error" id="consent-error" role="alert"></p>
    </div>
  </div>

  <div class="hp" aria-hidden="true">
    <label for="company-hp">Leave this empty</label>
    <input class="hp-field" type="text" id="company-hp" name="_hp" tabindex="-1" autocomplete="off">
  </div>

  <div class="actions">
    <button class="btn btn--primary btn--lg" type="submit">Send enquiry</button>
    <a class="btn btn--ghost btn--lg" href="${site.phone.href}">${icon('phone', { size: 18 })}Call instead</a>
  </div>
  <p class="form-status" id="form-status" role="status" hidden></p>
</form>`;
}

export default {
  url: '/contact',
  file: 'contact.html',
  depth: d,
  title: `Contact RetroHof | Free Quotes, Surrey & Southern England`,
  description: `Contact RetroHof for property maintenance across southern England. Call ${site.phone.display}, email ${site.email}, or send an enquiry for a free, no-obligation quotation.`,
  ogImage: '/assets/img/banner/contact.jpg',
  breadcrumbs: [{ label: 'Contact', href: '/contact' }],
  body: [
    banner(d, {
      eyebrow: 'Get in touch',
      title: 'Request a quote',
      lead: 'Free surveys, written quotations and an honest answer about timescales. We aim to reply to every enquiry within one working day.',
      image: '/assets/img/banner/contact.jpg',
      breadcrumbs: [{ label: 'Contact', href: '/contact' }],
    }),
    `
<section class="sec">
  <div class="wrap">
    <div class="contact-cards">
      ${contactCards
        .map(
          ([ic, label, value, note]) => `
      <div class="contact-card">
        ${icon(ic, { size: 22 })}
        <div>
          <strong>${esc(label)}</strong>
          ${value}
          <span class="hint">${note}</span>
        </div>
      </div>`,
        )
        .join('')}
    </div>

    <div class="cols cols--2 cols--7-5">
      <div>
        ${form()}
      </div>
      <div>
        <p class="eyebrow">Before you send</p>
        <h2 class="sec-head__title">What helps us price it accurately</h2>
        <ul class="ticks">
          <li><strong>Photographs.</strong> One wide shot and one close-up answers most of our questions.</li>
          <li><strong>Access details.</strong> Whether the property is occupied, and who holds the keys.</li>
          <li><strong>Any deadline.</strong> A tenancy start, a completion date, an insurer&rsquo;s timescale.</li>
          <li><strong>What has been tried.</strong> Previous repairs tell us a great deal about the cause.</li>
        </ul>

        <div class="note">
          <strong>Emergency?</strong> Do not use the form. Call <a href="${site.phone.href}">${esc(site.phone.display)}</a>. For escaping water, isolate the stopcock first if you safely can &mdash; we will talk you through it on the phone.
        </div>

        <h3 style="margin-top:2rem">Response times</h3>
        <ul class="ticks">
          <li>Enquiries answered within one working day</li>
          <li>Site surveys usually within two to three working days</li>
          <li>Urgent repairs same or next working day</li>
          <li>24/7 cover for managed properties and contract clients</li>
        </ul>

        <img class="mt-2" style="border-radius:var(--r-lg)" src="${rel(d, '/assets/img/misc/quote.jpg')}" alt="RetroHof tradesperson at work on a customer property" width="1400" height="1000" loading="lazy">
      </div>
    </div>
  </div>
</section>`,
    `
<section class="sec sec--tint">
  <div class="wrap">
    ${sectionHead({
      eyebrow: 'Coverage',
      title: 'Not sure if we cover you?',
      lead: 'We work across southern England &mdash; Surrey and south-west London day to day, and out through Hertfordshire, Kent, Sussex, Hampshire, Dorset and Devon for planned and contract work. If you are not sure, ask &mdash; we will give you a straight answer.',
    })}
    <div class="actions actions--center">
      <a class="btn btn--outline" href="${rel(d, '/areas')}">See the full coverage map</a>
    </div>
  </div>
</section>`,
    ctaBand(d, {
      eyebrow: 'Prefer to talk?',
      title: 'Call us and speak to someone who knows the job',
      text: `${site.hours}. Out of hours, managed properties and contract clients have a 24/7 emergency line.`,
    }),
  ].join('\n'),
};
