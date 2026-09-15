// ---------------------------------------------------------------------------
// Single source of truth for business details. Change it here, rebuild, and it
// updates everywhere (header, footer, contact page, schema.org markup, sitemap).
// ---------------------------------------------------------------------------

export const site = {
  name: 'RetroHof',
  legalName: 'RetroHof Ltd',
  strapline: 'Property Maintenance',
  descriptor: 'Professional Property Maintenance Services',

  // NOTE: the old site showed 01932 231 122 in the header but linked
  // tel:01372 231 122 in the footer. 01932 is the Walton-on-Thames / Hersham
  // code, so that is used here. Confirm before going live.
  phone: {
    display: '01932 231 122',
    href: 'tel:+441932231122',
  },
  email: 'info@retrohof.co.uk',
  hours: 'Mon – Sat, 8am – 6pm',
  hoursShort: 'Mon–Sat 8–6',
  emergencyNote: '24/7 emergency cover for managed properties',

  baseUrl: 'https://www.retrohof.co.uk',

  address: {
    locality: 'Hersham',
    region: 'Surrey',
    country: 'GB',
  },

  // Primary trading area, used on the home page, areas page and schema.org.
  areas: [
    'Hersham', 'Walton-on-Thames', 'Weybridge', 'Esher', 'Cobham',
    'East Molesey', 'West Molesey', 'Thames Ditton', 'Claygate', 'Oxshott',
    'Byfleet', 'Addlestone', 'Chertsey', 'Shepperton', 'Sunbury-on-Thames',
    'Kingston upon Thames', 'Surbiton', 'Epsom', 'Leatherhead', 'Woking',
  ],

  // Replace with the company's real social profiles, or leave empty and the
  // icons are simply not rendered. (The old site linked to unrelated brands.)
  social: [],

  // Where the contact form posts. Formspree / Netlify Forms / Basin all work
  // with the markup as written. Leave null and the form falls back to opening
  // the visitor's email client with the message pre-filled.
  formEndpoint: null,

  companyNumber: null, // e.g. '12345678' — shown in the footer when set
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [], // filled in by the build from the services data
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Who We Help', href: '/sectors' },
  { label: 'Areas', href: '/areas' },
  { label: 'About', href: '/about' },
  { label: 'FAQs', href: '/faq' },
];

export const footerLegal = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Acceptable Use', href: '/acceptable-use' },
  { label: 'Cookies', href: '/privacy#cookies' },
];
