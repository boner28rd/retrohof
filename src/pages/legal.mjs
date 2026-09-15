// ---------------------------------------------------------------------------
// Legal pages. The wording below is a sensible, accurate starting point for a
// UK property maintenance company and reflects how this website actually
// behaves (what the form collects, what is stored, what is not). It has NOT
// been reviewed by a solicitor. Have your own adviser check the terms and the
// privacy policy — particularly the cancellation, liability and data-retention
// clauses — and fill in the marked gaps before relying on them.
// ---------------------------------------------------------------------------
import { site } from '../data/site.mjs';
import { esc, rel } from '../layout.mjs';
import { banner } from '../components.mjs';

const d = 1;
const UPDATED = 'September 2026';

const page = (slug, file, title, heading, lead, description, bodyHtml) => ({
  url: `/${slug}`,
  file,
  depth: d,
  title: `${title} | ${site.legalName}`,
  description,
  ogImage: '/assets/img/banner/legal.jpg',
  breadcrumbs: [{ label: title, href: `/${slug}` }],
  body: [
    banner(d, {
      eyebrow: 'Legal',
      title: esc(heading),
      lead: esc(lead),
      image: '/assets/img/banner/legal.jpg',
      breadcrumbs: [{ label: title, href: `/${slug}` }],
    }),
    `
<section class="sec">
  <div class="wrap">
    <div class="prose">
      <p class="prose__meta">Last updated: ${UPDATED}</p>
      ${bodyHtml}
    </div>
  </div>
</section>`,
  ].join('\n'),
});

/* ------------------------------------------------------------- terms -- */
const terms = page(
  'terms',
  'terms/index.html',
  'Terms & Conditions',
  'Terms and conditions',
  'The terms on which RetroHof Ltd provides property maintenance services and on which this website is made available.',
  'Terms and conditions for property maintenance services provided by RetroHof Ltd, covering quotations, pricing, variations, access, guarantees and cancellation.',
  `
<h2>1. About us</h2>
<p>This website is operated by ${esc(site.legalName)} ("we", "us", "our"), a property maintenance company based in ${esc(site.address.locality)}, ${esc(site.address.region)}. You can contact us on <a href="${site.phone.href}">${esc(site.phone.display)}</a> or at <a href="mailto:${site.email}">${esc(site.email)}</a>.</p>

<h2>2. These terms</h2>
<p>These terms apply to the services we provide and to your use of this website. By instructing us to carry out work you accept them. If a signed contract or framework agreement is in place between us, that agreement takes precedence where the two conflict.</p>

<h2>3. Quotations and estimates</h2>
<ul>
  <li>A <strong>quotation</strong> is a fixed price for a defined scope of work, set out in writing. It is valid for 30 days from issue unless stated otherwise.</li>
  <li>An <strong>estimate</strong> is our best assessment where the full extent of work cannot be established in advance. We will always tell you which one you have been given.</li>
  <li>Quotations are based on the information available at the time and on normal working hours. They assume reasonable access to the property and to services.</li>
  <li>Surveys and quotations are provided free of charge and without obligation, other than detailed condition or dilapidations reports prepared for a third party, which are chargeable and always agreed in advance.</li>
</ul>

<h2>4. Variations and unforeseen work</h2>
<p>Property work occasionally uncovers conditions that could not reasonably have been identified beforehand — concealed rot, non-compliant wiring, or services that are not where drawings indicate. Where this happens we will stop, explain the position, and provide a written price for the additional work. <strong>No additional work is carried out and no additional charge is made without your written agreement.</strong></p>

<h2>5. Prices and payment</h2>
<ul>
  <li>Prices are in pounds sterling. Where we are VAT registered, VAT is shown separately on the quotation and invoice.</li>
  <li>Smaller works are invoiced on completion and payable within 7 days.</li>
  <li>Larger projects run on a stage-payment schedule set out in the quotation.</li>
  <li>We accept bank transfer and card payment. We do not ask for large up-front deposits; where materials must be ordered in advance we will identify the amount and what it covers.</li>
  <li>We reserve the right to charge statutory interest on overdue accounts under the Late Payment of Commercial Debts (Interest) Act 1998 for business customers.</li>
</ul>

<h2>6. Access and the working environment</h2>
<p>You agree to provide safe and reasonable access to the property at the agreed times, and to tell us about anything relevant to our safety — asbestos, unstable structures, aggressive animals, vulnerable occupants. Where access is not available at a booked appointment and we have not been given reasonable notice, we may charge for the visit.</p>
<p>We will protect floors, furnishings and fittings in the working area. We ask that you move or clear valuable, fragile and personal items before work begins.</p>

<h2>7. Your cancellation rights</h2>
<p>Where you are a consumer and the contract was agreed away from our business premises or at a distance, you have the right to cancel within 14 days under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. If you ask us to begin work within that period and then cancel, you must pay for the work carried out up to the point of cancellation.</p>
<p>Emergency and urgent works carried out at your express request within the cancellation period are chargeable in full.</p>

<h2>8. Our guarantee</h2>
<p>We guarantee our workmanship for 12 months from completion. If defective workmanship is reported to us within that period we will return and put it right at no charge. The guarantee does not cover:</p>
<ul>
  <li>fair wear and tear, accidental or deliberate damage, or misuse;</li>
  <li>pre-existing defects outside the scope of the work we carried out;</li>
  <li>work subsequently altered or interfered with by others;</li>
  <li>materials or appliances supplied by you or by a third party, which carry their own manufacturer guarantees.</li>
</ul>
<p>Manufacturer guarantees on materials and appliances we supply are passed to you on completion.</p>

<h2>9. Liability</h2>
<p>We maintain public liability and employers' liability insurance; certificates are available on request. We are liable for loss or damage caused by our negligence or breach of contract, but we are not liable for loss of profit, loss of business, or consequential loss. Nothing in these terms limits or excludes our liability for death or personal injury caused by negligence, for fraud, or for anything else which cannot lawfully be limited.</p>
<p>Where you are a consumer, nothing in these terms affects your statutory rights under the Consumer Rights Act 2015.</p>

<h2>10. Complaints</h2>
<p>If something is not right, tell us. Contact your account contact or email <a href="mailto:${site.email}">${esc(site.email)}</a>. We will acknowledge within one working day and set out how we intend to resolve it. Almost everything is fixable when it is raised early.</p>

<h2>11. Use of this website</h2>
<p>This website is provided free of charge and we give no guarantee that it will always be available or error-free. Content is for general information and does not constitute professional advice for your specific property. Your use of the site is also governed by our <a href="${rel(d, '/acceptable-use')}">acceptable use policy</a> and <a href="${rel(d, '/privacy')}">privacy policy</a>.</p>

<h2>12. Intellectual property</h2>
<p>All content on this website — text, layout, graphics and the ${esc(site.name)} name and logo — belongs to us or is licensed to us. You may view and print pages for your own use. You may not reproduce the content commercially without our written permission.</p>

<h2>13. Governing law</h2>
<p>These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction.</p>

<h2>14. Changes</h2>
<p>We may update these terms from time to time. The version in force is the one published on this page at the date your work is instructed.</p>
`,
);

/* ----------------------------------------------------------- privacy -- */
const privacy = page(
  'privacy',
  'privacy/index.html',
  'Privacy Policy',
  'Privacy policy',
  'What personal data RetroHof Ltd collects through this website and in the course of carrying out work, why we hold it, and your rights over it.',
  'RetroHof Ltd privacy policy — what personal data we collect, how we use it, how long we keep it, and your rights under UK GDPR.',
  `
<p>${esc(site.legalName)} is the data controller for the personal data described in this policy. You can contact us about anything in it on <a href="${site.phone.href}">${esc(site.phone.display)}</a> or at <a href="mailto:${site.email}">${esc(site.email)}</a>.</p>

<h2>What we collect</h2>
<table>
  <thead><tr><th>When</th><th>What</th><th>Why</th></tr></thead>
  <tbody>
    <tr>
      <td>You send the enquiry form</td>
      <td>Name, email address, phone number, property postcode, the services you selected and your message</td>
      <td>To reply to your enquiry and prepare a quotation. Lawful basis: steps taken at your request prior to entering a contract.</td>
    </tr>
    <tr>
      <td>You call or email us</td>
      <td>Your contact details and what you tell us about the property</td>
      <td>To answer your enquiry and keep a record of what was discussed. Lawful basis: legitimate interests.</td>
    </tr>
    <tr>
      <td>We carry out work</td>
      <td>Property address, access arrangements, job records, photographs of the work, invoices and payment records</td>
      <td>To perform the contract, evidence what was done, and meet our legal and tax obligations.</td>
    </tr>
    <tr>
      <td>You visit this website</td>
      <td>Standard server log data, including IP address, browser type and pages requested</td>
      <td>To keep the site available and secure. Lawful basis: legitimate interests.</td>
    </tr>
  </tbody>
</table>

<h2>What we do not do</h2>
<ul>
  <li>We do not sell, rent or trade your personal data.</li>
  <li>We do not use your details for marketing unless you have asked us to.</li>
  <li>We do not use advertising or tracking cookies on this website.</li>
</ul>

<h2 id="cookies">Cookies</h2>
<p>This website does not set advertising, analytics or tracking cookies, and it does not build a profile of you. If we add analytics in future we will ask for your consent first and update this page before doing so.</p>
<p>Fonts on this site are loaded from Google Fonts, which means your browser makes a request to <code>fonts.googleapis.com</code> and <code>fonts.gstatic.com</code>. Google receives your IP address as part of that request. Google's handling of it is covered by its own privacy notice.</p>

<h2>Photographs of work</h2>
<p>We take photographs of work in progress and on completion as a record for you, for us, and for any insurer or agent involved. We will not publish a photograph of your property on this website, on social media or in any marketing material without asking you first.</p>

<h2>Who we share data with</h2>
<p>We share personal data only where it is necessary to do the job or where the law requires it:</p>
<ul>
  <li>with our own staff and subcontractors working on your property, limited to what they need;</li>
  <li>with your letting or managing agent, or with a landlord or tenant, where they instructed the work or are party to it;</li>
  <li>with our accountants, insurers and professional advisers;</li>
  <li>with certification bodies where a certificate must be registered (for example electrical or gas work);</li>
  <li>where we are legally obliged to disclose it.</li>
</ul>

<h2>How long we keep it</h2>
<ul>
  <li><strong>Enquiries that do not lead to work:</strong> up to 12 months, then deleted.</li>
  <li><strong>Job records, invoices and certificates:</strong> 6 years after the end of the relevant tax year, to meet HMRC requirements and to cover the limitation period for any claim.</li>
  <li><strong>Safety-critical records</strong> (electrical and gas certification): retained for as long as the regulations require.</li>
  <li><strong>Website server logs:</strong> a short rolling period, typically no more than 30 days.</li>
</ul>

<h2>Where data is held</h2>
<p>Our records are held in the United Kingdom or the European Economic Area. Where a supplier processes data outside that area, we ensure an appropriate safeguard recognised under UK data protection law is in place.</p>

<h2>Your rights</h2>
<p>Under UK GDPR you have the right to ask us for a copy of the personal data we hold about you, to have inaccurate data corrected, to have data erased where we no longer need it, to restrict or object to how we use it, and to receive it in a portable format. To exercise any of these, email <a href="mailto:${site.email}">${esc(site.email)}</a>. We will respond within one month.</p>
<p>If you are unhappy with how we have handled your data you can complain to the Information Commissioner's Office at <a href="https://ico.org.uk" rel="noopener">ico.org.uk</a> or on 0303 123 1113. We would appreciate the chance to put it right first.</p>

<h2>Security</h2>
<p>This website is served over HTTPS. Enquiry form submissions are transmitted encrypted. Access to our job records is limited to staff who need it. No system is perfectly secure, but we take the protection of your data seriously and will tell you promptly if a breach is likely to affect you.</p>

<h2>Changes to this policy</h2>
<p>We will update this page when our practices change. The date at the top shows when it was last revised.</p>
`,
);

/* ----------------------------------------------------- acceptable use -- */
const acceptableUse = page(
  'acceptable-use',
  'acceptable-use/index.html',
  'Acceptable Use Policy',
  'Acceptable use policy',
  'The rules for using the RetroHof website and for material you send to us through it.',
  'Acceptable use policy for the RetroHof Ltd website — permitted and prohibited uses, content standards and enforcement.',
  `
<p>This policy sets out how you may use this website, operated by ${esc(site.legalName)}. By using the site you accept it. If you do not accept it, please stop using the site.</p>

<h2>Permitted use</h2>
<p>You may use this website to find information about our services, to contact us about work on a property, and to print or save pages for your own reference.</p>

<h2>Prohibited use</h2>
<p>You must not use this website:</p>
<ul>
  <li>in any way that breaches applicable law or regulation;</li>
  <li>to send, knowingly receive, upload or transmit any material that is unlawful, defamatory, obscene, threatening, or that infringes someone else's rights;</li>
  <li>to transmit unsolicited commercial communications, or to harvest contact details for that purpose;</li>
  <li>to knowingly introduce viruses, trojans, worms, logic bombs or other malicious material;</li>
  <li>to attempt to gain unauthorised access to the site, the server on which it is stored, or any connected system;</li>
  <li>to attack the site by means of a denial-of-service attack;</li>
  <li>to reproduce, duplicate, copy or resell any part of the site contrary to our <a href="${rel(d, '/terms')}">terms and conditions</a>;</li>
  <li>to scrape, data-mine or systematically extract content, or to use automated tools to access the site other than well-behaved search engine crawlers.</li>
</ul>

<h2>Content standards for material you send us</h2>
<p>Anything you submit through the enquiry form, by email or by any other route must be accurate where it states facts, genuinely held where it states opinions, and must comply with the law. It must not be defamatory, obscene, offensive, deceptive, or likely to harass, upset or embarrass another person. It must not impersonate anyone or misrepresent your relationship to a property.</p>

<h2>Enforcement</h2>
<p>We determine whether this policy has been breached. Where it has, we may take any action we consider appropriate, including withdrawing your right to use the site, removing material, issuing a warning, taking legal proceedings, and disclosing information to law enforcement where we are required or consider it necessary.</p>
<p>We exclude liability for actions taken in response to breaches of this policy, and the responses described above are not limited — we may take any other action we reasonably deem appropriate.</p>

<h2>Reporting a problem</h2>
<p>If you believe material on this site breaches this policy, or you have found a security issue, email <a href="mailto:${site.email}">${esc(site.email)}</a> with the details and we will look into it.</p>

<h2>Changes to this policy</h2>
<p>We may revise this policy at any time. Please check this page from time to time; the revised policy applies from the date it is posted.</p>
`,
);

export default [terms, privacy, acceptableUse];
