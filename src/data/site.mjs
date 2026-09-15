// ---------------------------------------------------------------------------
// Single source of truth for business details. Change it here, rebuild, and it
// updates everywhere (header, footer, contact page, schema.org markup, sitemap).
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Coverage. Ordered by distance from the Hersham base, which is also the
// honest order for response times — a van can be in Esher this morning; Devon
// is programmed work, not a call-out.
//
// The county lists reflect the stated footprint: north to Welwyn, east into
// Kent, south through Sussex, and west as far as Dorset, Devon and Plymouth.
// Town names are given for the home patch only. Add towns to the other regions
// as you confirm them — named towns are good for local search, but only list
// places you genuinely work.
// ---------------------------------------------------------------------------
export const coverage = [
  {
    id: 'surrey',
    title: 'Surrey & south-west London',
    note: 'Our home patch. Same or next working day for urgent work, and where most of our scheduled maintenance sits.',
    counties: ['Surrey', 'Greater London'],
    places: [
      'Hersham', 'Walton-on-Thames', 'Weybridge', 'Esher', 'Cobham', 'Oxshott',
      'Claygate', 'Thames Ditton', 'East Molesey', 'West Molesey', 'Byfleet',
      'Addlestone', 'Chertsey', 'Shepperton', 'Sunbury-on-Thames', 'Woking',
      'Guildford', 'Epsom', 'Leatherhead', 'Dorking', 'Kingston upon Thames',
      'Surbiton', 'Richmond', 'Twickenham', 'Wimbledon',
    ],
  },
  {
    id: 'north',
    title: 'North to Hertfordshire',
    note: 'Up through west London and the M25 corridor, as far north as Welwyn.',
    counties: ['Middlesex', 'Buckinghamshire', 'Berkshire', 'Hertfordshire'],
    // Ordered outward from the Hersham base. Stops at Welwyn, the stated
    // northern limit — nothing beyond it (Stevenage, Milton Keynes) is listed.
    places: [
      // West London & Middlesex
      'Hounslow', 'Uxbridge', 'Harrow',
      // Berkshire
      'Windsor', 'Slough', 'Maidenhead', 'Ascot', 'Bracknell', 'Wokingham',
      'Reading',
      // Buckinghamshire
      'Gerrards Cross', 'Beaconsfield', 'High Wycombe', 'Marlow', 'Amersham',
      'Chesham',
      // Hertfordshire
      'Rickmansworth', 'Watford', 'Borehamwood', 'Radlett', 'St Albans',
      'Hemel Hempstead', 'Berkhamsted', 'Potters Bar', 'Hatfield',
      'Welwyn Garden City', 'Welwyn',
    ],
  },
  {
    id: 'east',
    title: 'Kent & Sussex',
    note: 'Planned works, portfolio maintenance and contract clients across the south east.',
    counties: ['Kent', 'East Sussex', 'West Sussex'],
    // Principal towns of the three counties, ordered roughly west to east.
    // Strike any RetroHof does not actually attend — an unserved town on the
    // list is worse than a short list.
    places: [
      // Kent
      'Sevenoaks', 'Tonbridge', 'Tunbridge Wells', 'Dartford', 'Gravesend',
      'Rochester', 'Chatham', 'Maidstone', 'Sittingbourne', 'Ashford',
      'Canterbury', 'Whitstable', 'Folkestone', 'Dover',
      // West Sussex
      'Crawley', 'East Grinstead', 'Haywards Heath', 'Burgess Hill', 'Horsham',
      'Worthing', 'Littlehampton', 'Bognor Regis', 'Chichester',
      // East Sussex
      'Brighton & Hove', 'Lewes', 'Newhaven', 'Eastbourne', 'Bexhill-on-Sea',
      'Hastings',
    ],
  },
  {
    id: 'southwest',
    title: 'The South West',
    note: 'Refurbishment and contract work, programmed in blocks so the travel earns its keep. As far west as Plymouth.',
    counties: ['Hampshire', 'Dorset', 'Devon'],
    // Ordered east to west along the route out, ending at Plymouth.
    places: [
      // Hampshire
      'Aldershot', 'Farnborough', 'Fleet', 'Basingstoke', 'Winchester',
      'Andover', 'Eastleigh', 'Southampton', 'Portsmouth', 'Fareham',
      'Lymington',
      // Dorset
      'Christchurch', 'Bournemouth', 'Poole', 'Wimborne Minster', 'Dorchester',
      'Weymouth', 'Bridport',
      // Devon
      'Honiton', 'Exmouth', 'Exeter', 'Newton Abbot', 'Torquay', 'Paignton',
      'Totnes', 'Ivybridge', 'Plymouth',
    ],
  },
];

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

  // How the trading area is described in body copy and page titles. The
  // company is based in Surrey but works well beyond it — see `coverage`.
  regionPhrase: 'southern England',
  regionPhraseTitle: 'Surrey & Southern England',
  coverageSummary:
    'From our base in Hersham we work across the south of England — north to Welwyn, east into Kent, south through Sussex, and west as far as Dorset, Devon and Plymouth.',

  // Derived from `coverage`, used for schema.org areaServed.
  get areas() {
    return coverage.flatMap((c) => c.places);
  },
  get counties() {
    return [...new Set(coverage.flatMap((c) => c.counties))];
  },

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
