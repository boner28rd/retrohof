// ---------------------------------------------------------------------------
// Shared editorial content: FAQs, sectors, process, credentials, testimonials.
// ---------------------------------------------------------------------------

import { site } from './site.mjs';

export const faqGroups = [
  {
    title: 'Getting a price',
    items: [
      [
        'How do I get a quote?',
        'Call us, email, or send the enquiry form. For small jobs a few photographs and a description are usually enough for a fixed price by return. For anything larger we arrange a site visit, normally within two to three working days, and follow it with a written quotation.',
      ],
      [
        'Do you charge for quotations?',
        'No. Surveys and quotations are free and carry no obligation. The only exception is a detailed condition or dilapidations report prepared for a third party, which is a priced piece of work in its own right — we will always tell you before any charge applies.',
      ],
      [
        'Is the price fixed?',
        'Yes, against the agreed scope. The quotation states exactly what is included. If something genuinely unforeseen appears once work has started — rot behind a panel, or pipework that is not where the drawings said — we stop, explain it, and price the variation in writing before we carry on.',
      ],
      [
        'How do you charge for smaller jobs?',
        'Handyman work is booked as half-day or full-day visits rather than by the hour, which is better value if you have a list. Materials are charged at cost and itemised.',
      ],
      [
        'When do I pay?',
        'Smaller jobs are invoiced on completion, payable within seven days. Larger projects run on an agreed stage-payment schedule set out in the quotation. We accept bank transfer and card. We never ask for a large deposit up front.',
      ],
    ],
  },
  {
    title: 'How we work',
    items: [
      [
        'How quickly can you attend?',
        'Routine work is usually booked within a week. Urgent repairs — anything causing damage or making a property unsafe — are prioritised the same or next working day. Managed properties and contract clients have 24/7 emergency cover.',
      ],
      [
        'Will it be the same team each time?',
        'Wherever possible, yes. Contract clients are given a named account contact and a regular team, which matters for tenants and for properties with a history you need someone to remember.',
      ],
      [
        'Do you work in occupied properties?',
        'Routinely. Floors and furniture are protected daily, work areas are left safe and usable at the end of each day, and we agree working hours with you in advance — particularly where there are shift workers, young children or pets.',
      ],
      [
        'What about rubbish and mess?',
        'Everything we generate goes with us. We are a registered waste carrier and dispose of waste through licensed transfer stations. A clean site at the end of each day is part of the job, not an extra.',
      ],
      [
        'Can you deal with the tenant directly?',
        'Yes. With the landlord or agent’s authority we will arrange access, keep the tenant informed and report back to you. It removes a considerable amount of back-and-forth from your week.',
      ],
    ],
  },
  {
    title: 'Cover, compliance and guarantees',
    items: [
      [
        'Are you insured?',
        'Yes. We carry public liability insurance and employers’ liability cover. A copy of the certificate is available on request, and we provide it as standard to managing agents and commercial clients before the first job.',
      ],
      [
        'Are your trades qualified?',
        'Gas work is carried out by Gas Safe registered engineers and electrical work by qualified, registered electricians, with the relevant certification issued on completion. Our carpenters, decorators and general maintenance staff are time-served and supervised.',
      ],
      [
        'Is your work guaranteed?',
        'Workmanship is guaranteed for twelve months from completion. Manufacturer guarantees on materials and appliances are passed to you in the handover pack. If something we did is not right, we come back and put it right.',
      ],
      [
        'Do you provide certificates?',
        'Yes — EICRs, gas safety records, Part P compliance certificates and Building Control sign-off, as the work requires. For lettings work we can issue everything as a single compliance pack.',
      ],
      [
        'What if I am not happy with something?',
        'Tell us. Raise it with your account contact or email the office and we will respond within one working day with a plan to resolve it. Almost everything is fixable if it is raised early.',
      ],
    ],
  },
  {
    title: 'Areas and availability',
    items: [
      [
        'Which areas do you cover?',
        'We are based in Hersham in Surrey and work across the south of England — north to Welwyn, east into Kent, south through Sussex, and west through Hampshire and Dorset as far as Devon and Plymouth. Around Surrey and south-west London we cover reactive and scheduled maintenance; further out the work is planned and programmed rather than same-week. If you are not sure, ask — we will tell you honestly whether we are the right firm for the job.',
      ],
      [
        'Do you have a minimum job size?',
        'For one-off visits, a half-day booking. There is no minimum for contract clients and managed properties.',
      ],
      [
        'What are your working hours?',
        `${site.hours} for booked work. Emergency cover for managed properties runs around the clock, including Sundays and bank holidays.`,
      ],
    ],
  },
];

export const sectors = [
  {
    slug: 'homeowners',
    title: 'Homeowners',
    icon: 'home',
    image: '/assets/img/projects/lounge.jpg',
    summary:
      'One firm for the whole property, so you are not collecting quotes from six different trades every time something needs doing.',
    points: [
      'A single point of contact for every trade',
      'Fixed prices agreed before work starts',
      'Clean, protected working areas in occupied homes',
      'Twelve-month workmanship guarantee',
    ],
  },
  {
    slug: 'landlords',
    title: 'Landlords',
    icon: 'key',
    image: '/assets/img/projects/void.jpg',
    summary:
      'Fast void turnarounds, compliance handled properly, and repairs dealt with before they become claims.',
    points: [
      'Void turnarounds programmed to a fixed date',
      'EICR, gas safety and alarm compliance in one pack',
      'Direct tenant liaison with your authority',
      'Photographic evidence on every completed job',
    ],
  },
  {
    slug: 'agents',
    title: 'Letting & managing agents',
    icon: 'clipboard',
    image: '/assets/img/projects/commercial.jpg',
    summary:
      'A maintenance partner who reduces the number of things on your desk rather than adding to them.',
    points: [
      'Named account contact and agreed response times',
      'Consolidated monthly invoicing across a portfolio',
      'Works orders acknowledged the same working day',
      '24/7 emergency line for managed properties',
    ],
  },
  {
    slug: 'businesses',
    title: 'Businesses & commercial',
    icon: 'building',
    image: '/assets/img/projects/office.jpg',
    summary:
      'Planned and reactive maintenance that works around your trading hours, not against them.',
    points: [
      'Evening and weekend working to avoid downtime',
      'Planned maintenance schedules and budgets',
      'Fit-out, partitioning and reinstatement works',
      'RAMS and insurance documentation as standard',
    ],
  },
  {
    slug: 'blocks',
    title: 'Blocks & management companies',
    icon: 'layers',
    image: '/assets/img/projects/riser.jpg',
    summary:
      'Communal areas, cyclical decoration and grounds maintenance on a schedule residents can rely on.',
    points: [
      'Cyclical redecoration programmes and budgets',
      'Communal cleaning and grounds contracts',
      'Fire door and emergency lighting remedials',
      'Resident notices and phased access planning',
    ],
  },
];

export const process = [
  [
    'Tell us what needs doing',
    'Call, email or send the form. Photographs help. For urgent problems we will talk you through making things safe on the phone.',
  ],
  [
    'Survey and fixed quote',
    'A site visit within a few working days, followed by a written, itemised quotation with a clear scope. No obligation, no charge.',
  ],
  [
    'Booked in and programmed',
    'An agreed start date, an agreed working pattern, and a named contact who knows your property.',
  ],
  [
    'Completed and signed off',
    'A joint walk-round, certificates handed over, site left clean, and twelve months of workmanship cover behind it.',
  ],
];

export const credentials = [
  ['Public & employers’ liability insured', 'Certificates provided to agents and commercial clients before the first job.'],
  ['Gas Safe registered engineers', 'All gas work carried out and certificated by registered engineers.'],
  ['Qualified, registered electricians', 'Part P notified work with certificates issued on completion.'],
  ['Registered waste carrier', 'Everything we remove is disposed of through licensed transfer stations.'],
  ['12-month workmanship guarantee', 'If something we did is not right, we come back and put it right.'],
  ['DBS-checked staff available', 'For work in occupied homes, schools and care settings on request.'],
];

export const stats = [
  ['1,200+', 'jobs completed a year'],
  // Derived, so it cannot drift out of step with the coverage data.
  [String(site.counties.length), 'counties across southern England'],
  ['24/7', 'emergency cover for managed properties'],
  ['12 mth', 'guarantee on our workmanship'],
];

// ---------------------------------------------------------------------------
// PLACEHOLDER TESTIMONIALS — replace with real, attributable client feedback
// before publishing, or delete this array and the section disappears from the
// home page. They deliberately carry no personal names: do not add invented
// ones. Real reviews only.
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      'Sample testimonial. Replace this with a real client quote before the site goes live — a short, specific comment about a job you actually completed works far better than anything generic.',
    attribution: 'Homeowner, Walton-on-Thames',
    placeholder: true,
  },
  {
    quote:
      'Sample testimonial. Ask two or three of your regular landlords or agents for a sentence about response times or void turnarounds, and use their words here with their permission.',
    attribution: 'Lettings manager, Surrey',
    placeholder: true,
  },
  {
    quote:
      'Sample testimonial. If you collect Google or Checkatrade reviews, quote those here and link to the profile so visitors can verify them independently.',
    attribution: 'Property management company, Kent',
    placeholder: true,
  },
];
