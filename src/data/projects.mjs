// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT — READ BEFORE PUBLISHING
//
// These are illustrative examples of the kind of work RetroHof carries out.
// They are NOT records of completed jobs. Replace each entry with a real
// project — real scope, real duration, real photographs — before the site goes
// live, or remove /projects from the navigation until you have real jobs to
// show. Publishing invented projects as genuine case studies would be
// misleading to customers.
//
// Every entry currently carries `placeholder: true`. Delete that flag as you
// replace each one; the build prints a warning listing anything still flagged.
// ---------------------------------------------------------------------------

export const projectCategories = [
  { id: 'all', label: 'All work' },
  { id: 'residential', label: 'Residential' },
  { id: 'lettings', label: 'Lettings & void' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'exterior', label: 'Exterior & roofline' },
];

export const projects = [
  {
    slug: 'kitchen-replacement',
    title: 'Kitchen replacement, three-bedroom semi',
    category: 'residential',
    location: 'Walton-on-Thames',
    duration: '11 working days',
    image: '/assets/img/projects/kitchen.jpg',
    imageAlt: 'Modern fitted kitchen after replacement',
    summary:
      'Strip-out of a dated kitchen, re-plastering, new units and worktops, with the plumbing and electrics brought up to current standards.',
    scope: [
      'Full strip-out and disposal of the existing kitchen',
      'Walls and ceiling re-plastered and redecorated',
      'New units, worktops and integrated appliances fitted',
      'Sockets relocated and circuit extended, certificated',
      'Waste and supply pipework renewed, new sink and tap',
      'Vinyl flooring laid and beading made good',
    ],
    outcome:
      'Delivered in a single programme with one point of contact, so the household was without a kitchen for eleven days rather than the six weeks a multi-contractor job would have taken.',
    services: ['refurbishment', 'plumbing-heating', 'electrical', 'carpentry-joinery'],
    placeholder: true,
  },
  {
    slug: 'bathroom-refit',
    title: 'Bathroom refit with wet-room shower',
    category: 'residential',
    location: 'Esher',
    duration: '8 working days',
    image: '/assets/img/projects/bathroom.jpg',
    imageAlt: 'Newly fitted bathroom with a walk-in shower',
    summary:
      'A tired family bathroom converted to a level-access shower with full tanking, underfloor heating and improved ventilation.',
    scope: [
      'Existing suite removed, floor levelled and tanked',
      'Level-access shower former and linear drain installed',
      'Electric underfloor heating with programmable thermostat',
      'Full-height tiling and waterproof board to wet areas',
      'Humidity-sensing extractor fitted and ducted externally',
      'Heated towel rail plumbed into the existing circuit',
    ],
    outcome:
      'A bathroom that works for an older resident today and still suits the property if it is sold, with the damp problem behind the old shower tray resolved at source.',
    services: ['plumbing-heating', 'electrical', 'refurbishment'],
    placeholder: true,
  },
  {
    slug: 'void-turnaround',
    title: 'Void turnaround, two-bedroom rental flat',
    category: 'lettings',
    location: 'Hersham',
    duration: '6 working days',
    image: '/assets/img/projects/void.jpg',
    imageAlt: 'Empty flat prepared for redecoration between tenancies',
    summary:
      'Clean, repair and redecorate between tenancies, completed inside a week so the property could be re-marketed without losing a month of rent.',
    scope: [
      'House clearance and licensed waste removal',
      'Plaster repairs, filling and making good throughout',
      'Full redecoration in the landlord’s standard specification',
      'Carpets deep cleaned, kitchen and bathroom sparkle clean',
      'EICR and gas safety check completed and certificates issued',
      'Photographic handover pack for the managing agent',
    ],
    outcome:
      'Re-let within nine days of the previous tenancy ending. The agent received a single invoice and a complete compliance pack rather than chasing five trades.',
    services: ['cleaning-waste', 'painting-decorating', 'electrical', 'plumbing-heating'],
    placeholder: true,
  },
  {
    slug: 'communal-redecoration',
    title: 'Communal hallway and stairwell redecoration',
    category: 'commercial',
    location: 'Weybridge',
    duration: '3 weeks',
    image: '/assets/img/projects/stairwell.jpg',
    imageAlt: 'Freshly decorated communal stairwell with new lighting',
    summary:
      'Redecoration of the common parts of a twelve-flat block, carried out in phases so residents always had a safe, lit route in and out.',
    scope: [
      'Phased works programme agreed with the management company',
      'Repairs to plaster, handrails and fire door closers',
      'Full redecoration of hallways, stairwells and landings',
      'Emergency lighting tested and faulty fittings replaced',
      'Non-slip nosings renewed on the main staircase',
      'Weekly progress notices posted for residents',
    ],
    outcome:
      'Completed without a single access complaint, and with the fire door defects picked up during the survey corrected as part of the same programme.',
    services: ['painting-decorating', 'carpentry-joinery', 'electrical'],
    placeholder: true,
  },
  {
    slug: 'roofline-replacement',
    title: 'Fascia, soffit and gutter replacement',
    category: 'exterior',
    location: 'Cobham',
    duration: '5 working days',
    image: '/assets/img/projects/roofline.jpg',
    imageAlt: 'Roofline and guttering works to a pitched roof',
    summary:
      'Rotten timber roofline replaced in full-height uPVC, resolving long-standing damp to two upstairs bedrooms.',
    scope: [
      'Scaffold erected to front and rear elevations',
      'Rotten fascia and soffit timbers removed',
      'New uPVC fascia, soffit and ventilated trim installed',
      'Guttering renewed, realigned and downpipes reconnected',
      'Two slipped tiles re-bedded and ridge re-pointed',
      'Internal damp patches dried, replastered and redecorated',
    ],
    outcome:
      'The damp staining that had been redecorated over twice in five years has not returned, because the cause rather than the symptom was dealt with.',
    services: ['roofing-guttering', 'painting-decorating'],
    placeholder: true,
  },
  {
    slug: 'garden-restoration',
    title: 'Overgrown garden restoration and maintenance plan',
    category: 'exterior',
    location: 'Thames Ditton',
    duration: '4 days, then monthly',
    image: '/assets/img/projects/garden.jpg',
    imageAlt: 'Restored garden with planted beds and clear paths',
    summary:
      'A garden left for three years cleared back to its structure, then put on a scheduled maintenance visit so it stays that way.',
    scope: [
      'Hard clearance of overgrowth, brambles and self-seeded trees',
      'Hedges reduced and reshaped, borders re-cut',
      'Patio and paths jet washed and re-pointed',
      'Fence panels and gate repaired and re-hung',
      'All arisings removed under waste carrier licence',
      'Monthly maintenance schedule set up',
    ],
    outcome:
      'Restored in four days for less than the cost of a full redesign, with a fixed monthly figure keeping it under control afterwards.',
    services: ['gardening-grounds'],
    placeholder: true,
  },
  {
    slug: 'office-fit-out',
    title: 'Small office refresh and partitioning',
    category: 'commercial',
    location: 'Kingston upon Thames',
    duration: '2 weeks',
    image: '/assets/img/projects/office.jpg',
    imageAlt: 'Refreshed open-plan office interior',
    summary:
      'An open-plan office reconfigured with two meeting rooms, new lighting and data points, worked evenings and weekends to avoid downtime.',
    scope: [
      'Glazed partitioning to form two meeting rooms',
      'LED lighting replacement with presence detection',
      'Additional power and data points to new desk positions',
      'Full redecoration and new carpet tiles',
      'Kitchenette refresh and appliance replacement',
      'Works phased outside trading hours',
    ],
    outcome:
      'Not a single day of lost trading, and an energy bill reduced by the lighting replacement alone.',
    services: ['refurbishment', 'electrical', 'painting-decorating'],
    placeholder: true,
  },
  {
    slug: 'riser-repipe',
    title: 'Communal riser pipework renewal',
    category: 'commercial',
    location: 'Surbiton',
    duration: '9 working days',
    image: '/assets/img/projects/riser.jpg',
    imageAlt: 'Renewed copper pipework in a service riser',
    summary:
      'Failing communal pipework in a service riser renewed after a third leak in eighteen months, with isolation valves added at each floor.',
    scope: [
      'Survey and leak history reviewed with the managing agent',
      'Temporary supply arrangements agreed with residents',
      'Corroded pipework stripped out floor by floor',
      'New pipework installed, insulated and pressure tested',
      'Isolation valves fitted at every floor for future works',
      'Riser cupboards made good and redecorated',
    ],
    outcome:
      'Future repairs can now be isolated to one floor instead of draining the whole block, and the recurring insurance claims stopped.',
    services: ['plumbing-heating', 'refurbishment'],
    placeholder: true,
  },
  {
    slug: 'exterior-decoration',
    title: 'Exterior redecoration, detached house',
    category: 'exterior',
    location: 'Oxshott',
    duration: '12 working days',
    image: '/assets/img/projects/exterior.jpg',
    imageAlt: 'Detached house after exterior redecoration',
    summary:
      'Render, joinery and roofline prepared and repainted, with rot repairs to two window frames carried out before decoration.',
    scope: [
      'Scaffold to all elevations',
      'Render cracks cut out, repaired and stabilised',
      'Rot repairs to two casement windows and a door frame',
      'Masonry paint applied in two full coats',
      'Joinery prepared, primed, undercoated and finished',
      'Gutters cleared and brackets renewed where loose',
    ],
    outcome:
      'A finish specified for a ten-year repaint cycle rather than the three years the previous coating managed, because the substrate was repaired first.',
    services: ['painting-decorating', 'carpentry-joinery', 'roofing-guttering'],
    placeholder: true,
  },
  {
    slug: 'flat-refurbishment',
    title: 'Buy-to-let flat refurbishment',
    category: 'lettings',
    location: 'Addlestone',
    duration: '4 weeks',
    image: '/assets/img/projects/flat.jpg',
    imageAlt: 'Refurbished living room in a rental flat',
    summary:
      'A dated one-bedroom flat brought up to a lettable standard for a first-time landlord, delivered to a fixed price against a written specification.',
    scope: [
      'Full strip-out and disposal',
      'New kitchen and shower room',
      'Rewire with new consumer unit and EICR issued',
      'Replastering, redecoration and new flooring throughout',
      'Smoke and heat alarms installed to current requirements',
      'Handover pack with all certificates and guarantees',
    ],
    outcome:
      'Let at the top of the local range for the property type, with a compliance pack the agent could use immediately.',
    services: ['refurbishment', 'electrical', 'plumbing-heating', 'painting-decorating'],
    placeholder: true,
  },
  {
    slug: 'commercial-unit-strip-out',
    title: 'Retail unit strip-out and reinstatement',
    category: 'commercial',
    location: 'Epsom',
    duration: '10 working days',
    image: '/assets/img/projects/commercial.jpg',
    imageAlt: 'Commercial unit stripped back and reinstated to shell condition',
    summary:
      'End-of-lease reinstatement of a retail unit back to shell-and-core, completed against the schedule of dilapidations.',
    scope: [
      'Dilapidations schedule reviewed line by line',
      'Shopfitting, signage and floor coverings removed',
      'Services capped off and certified',
      'Walls and ceilings made good and decorated to specification',
      'Floor screed repaired and left clean',
      'Photographic evidence pack for the landlord’s surveyor',
    ],
    outcome:
      'Accepted by the landlord’s surveyor without a retained dilapidations claim, which was worth considerably more than the cost of the works.',
    services: ['refurbishment', 'cleaning-waste', 'electrical'],
    placeholder: true,
  },
];
