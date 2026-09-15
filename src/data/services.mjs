// ---------------------------------------------------------------------------
// Services. Each entry generates a card on the home page, a block on the
// services hub, and its own detail page at /services/<slug>.
// ---------------------------------------------------------------------------

export const services = [
  {
    slug: 'handyman-repairs',
    title: 'Handyman & Repairs',
    short: 'Handyman & Repairs',
    icon: 'tools',
    image: '/assets/img/services/handyman.jpg',
    imageAlt: 'Tradesperson in hi-vis using a cordless drill on a repair job',
    teaser: 'One reliable number for the jobs that never quite get done — fixings, fittings, adjustments and small repairs.',
    intro:
      'Most property problems are small, awkward and easy to put off — a door that catches, a leaking seal, a shelf that needs hanging properly. RetroHof handles them in a single visit, so a list that has been growing for months is cleared in an afternoon.',
    lead:
      'Multi-skilled handyman services for homeowners, landlords and managing agents across Surrey and the south east.',
    includes: [
      'Door and window adjustments, locks, handles and closers',
      'Shelving, mirrors, blinds, curtain poles and TV brackets',
      'Flat-pack assembly and fitted furniture adjustment',
      'Silicone sealing to baths, showers, sinks and worktops',
      'Minor plaster repairs, filling and making good',
      'Tile replacement, re-grouting and splashback fitting',
      'Fitting smoke alarms, door numbers, letterboxes and handrails',
      'Punch-list and snagging work after a build or move-in',
    ],
    process: [
      ['Send the list', 'Photos and a rough description by email or WhatsApp are usually enough to price a visit.'],
      ['Book a slot', 'Half-day and full-day handyman visits — the more you group together, the better the value.'],
      ['Cleared in one go', 'We arrive stocked for common fixings and clear up before we leave.'],
    ],
    faqs: [
      ['Is there a minimum charge?', 'Yes — our smallest booking is a half-day visit. That usually covers six to ten typical jobs, so it is worth saving them up.'],
      ['Do you supply materials?', 'We carry standard fixings, sealants and consumables. Anything specific — a particular tap, tile or handle — we can supply and itemise, or you can provide it.'],
    ],
  },

  {
    slug: 'painting-decorating',
    title: 'Painting & Decorating',
    short: 'Painting & Decorating',
    icon: 'brush',
    image: '/assets/img/services/painting.jpg',
    imageAlt: 'Decorator rolling fresh paint onto a prepared interior wall',
    teaser: 'Interior and exterior decorating with the preparation done properly — the part that decides how long it lasts.',
    intro:
      'A decorating job is won or lost before the first coat goes on. We fill, sand, caulk and prime first, mask thoroughly, and use trade paints that hold up in hallways, kitchens and rented properties.',
    lead:
      'Interior and exterior painting and decorating for homes, rentals and commercial premises.',
    includes: [
      'Full interior redecoration — walls, ceilings, woodwork',
      'Exterior painting to render, masonry, fascias and joinery',
      'Preparation: filling, sanding, caulking, stain-blocking and priming',
      'Wallpaper hanging and removal, including feature walls',
      'Spray finishing to doors, kitchen units and large open areas',
      'Anti-mould and moisture-resistant coatings for bathrooms and kitchens',
      'Communal hallways, stairwells and landings for blocks of flats',
      'End-of-tenancy repaints to a consistent landlord spec',
    ],
    process: [
      ['Survey and colour', 'We measure up, check the substrate and confirm the finish, sheen and colour schedule.'],
      ['Prepare', 'Protection down, repairs made, surfaces sanded and primed. No shortcuts here.'],
      ['Apply and inspect', 'Coats applied, then a walk-round with you in daylight before we sign off.'],
    ],
    faqs: [
      ['Which paints do you use?', 'Trade ranges from Dulux, Crown and Johnstone’s as standard, with specialist coatings where the surface needs them. We are happy to work to a specified brand or a landlord’s standard colour.'],
      ['Can you work around us?', 'Yes. For occupied homes we work room by room, protect floors and furniture daily, and leave each space usable at the end of the day.'],
    ],
  },

  {
    slug: 'carpentry-joinery',
    title: 'Carpentry & Joinery',
    short: 'Carpentry & Joinery',
    icon: 'saw',
    image: '/assets/img/services/carpentry.jpg',
    imageAlt: 'Carpenter cutting timber to size on site',
    teaser: 'First and second fix carpentry, fitted storage and made-to-measure joinery that matches the existing property.',
    intro:
      'From a single sticking door to a run of fitted wardrobes in an awkward alcove, our carpenters work to the property rather than to a catalogue — matching existing profiles, mouldings and timber so new work does not announce itself.',
    lead:
      'Skilled carpentry and bespoke joinery for period and modern properties.',
    includes: [
      'Internal and external door hanging, easing and refitting',
      'Skirting, architrave, dado and picture rails — matched to existing profiles',
      'Fitted wardrobes, alcove storage, shelving and understairs cupboards',
      'Stud walls, loft hatches and boxing-in',
      'Staircase repairs, spindles, handrails and newel posts',
      'Laminate, engineered and solid timber flooring',
      'Decking, gates, fencing and garden structures',
      'Fire door installation and certification-ready ironmongery',
    ],
    process: [
      ['Measure', 'A site visit to template the space properly — old properties are rarely square.'],
      ['Make', 'Machined off site where that gives a better finish, fitted and scribed on site where it does not.'],
      ['Finish', 'Filled, sanded and left ready to decorate, or finished by our decorators as one job.'],
    ],
    faqs: [
      ['Can you match Victorian mouldings?', 'Usually, yes. We take a profile from the existing timber and either source a match or have it run to order.'],
      ['Do you fit fire doors?', 'We do, including intumescent strips, smoke seals and compliant ironmongery for HMOs and blocks of flats.'],
    ],
  },

  {
    slug: 'roofing-guttering',
    title: 'Roofing & Guttering',
    short: 'Roofing & Guttering',
    icon: 'roof',
    image: '/assets/img/services/roofing.jpg',
    imageAlt: 'Roofer working safely on a pitched residential roof',
    teaser: 'Repairs, replacements and roofline work that stops water getting into the building fabric.',
    intro:
      'Water damage is the most expensive problem a property can have, and it almost always starts at the roofline. We repair and replace tiles, flashing, fascias, soffits and gutters — and we tell you honestly when a repair will do and when it will not.',
    lead:
      'Pitched and flat roof repairs, roofline replacement and gutter maintenance.',
    includes: [
      'Slipped, cracked and missing tile and slate replacement',
      'Lead flashing, valleys, chimney and abutment repairs',
      'Ridge and hip re-bedding and re-pointing',
      'Flat roof repairs and replacement — felt, GRP and EPDM rubber',
      'Fascia, soffit and bargeboard replacement in uPVC or timber',
      'Gutter clearing, realignment, repair and full replacement',
      'Downpipe and gully clearance',
      'Roof surveys with photographs, for insurers or before purchase',
    ],
    process: [
      ['Inspect', 'Photographic survey from ladder, tower or pole camera — you see exactly what we see.'],
      ['Report', 'A written summary separating what needs doing now from what can wait.'],
      ['Repair', 'Carried out with the right access equipment and full public liability cover.'],
    ],
    faqs: [
      ['How often should gutters be cleared?', 'Once a year for most properties, twice if there are mature trees nearby. Autumn is the usual slot; blocked gutters in winter are the most common cause of damp on chimney breasts and bay roofs.'],
      ['Do you work at height safely?', 'Yes — tower scaffold or fixed scaffold as the job demands, never a ladder where a platform is the right call.'],
    ],
  },

  {
    slug: 'plumbing-heating',
    title: 'Plumbing & Heating',
    short: 'Plumbing & Heating',
    icon: 'plumbing',
    image: '/assets/img/services/plumbing.jpg',
    imageAlt: 'Plumber working on pipework beneath a sink',
    teaser: 'Leaks, blockages, bathrooms and heating — fixed by qualified plumbers, with gas work by Gas Safe engineers.',
    intro:
      'From a dripping tap to a full bathroom refit, our plumbers handle domestic and commercial systems. Anything involving gas is carried out by a Gas Safe registered engineer, and certificates are issued as standard.',
    lead:
      'Domestic and commercial plumbing, bathroom installation and heating maintenance.',
    includes: [
      'Leak detection and repair, including hidden and under-floor leaks',
      'Tap, valve, cistern, waste and trap replacement',
      'Blocked sinks, toilets, showers and external drains',
      'Complete bathroom, en-suite and wet room installation',
      'Radiator replacement, relocation and thermostatic valve upgrades',
      'System power flushing and central heating fault-finding',
      'Outside taps, washing machine and dishwasher connections',
      'Landlord gas safety checks (CP12) via our Gas Safe engineers',
    ],
    process: [
      ['Diagnose', 'We find the cause, not just the symptom — leak detection before we start opening up floors.'],
      ['Contain', 'Isolate, make safe and stop further damage on the first visit wherever possible.'],
      ['Repair and certify', 'Work completed, tested, and certificated where regulations require it.'],
    ],
    faqs: [
      ['Are you Gas Safe registered?', 'All gas work is carried out by Gas Safe registered engineers. We will give you the engineer’s registration number before the visit if you would like to check it.'],
      ['Can you handle an emergency leak?', 'Yes. Call the office number and we will talk you through isolating the supply while an engineer is dispatched. Managed properties have 24/7 cover.'],
    ],
  },

  {
    slug: 'electrical',
    title: 'Electrical Services',
    short: 'Electrical',
    icon: 'bolt',
    image: '/assets/img/services/electrical.jpg',
    imageAlt: 'Consumer unit with circuit breakers during an electrical upgrade',
    teaser: 'Certified electrical work, from extra sockets to consumer unit upgrades and landlord EICR reports.',
    intro:
      'Electrical work is the area where cutting corners costs the most. All of ours is carried out by qualified, registered electricians and notified where Part P requires it, with certificates issued on completion.',
    lead:
      'Registered electricians for testing, repairs, upgrades and new installations.',
    includes: [
      'Electrical Installation Condition Reports (EICR) for landlords',
      'Consumer unit and RCD upgrades to current regulations',
      'Additional sockets, spurs, USB outlets and data points',
      'Lighting design, downlights, outdoor and security lighting',
      'Fault-finding on tripping circuits and intermittent faults',
      'Smoke, heat and carbon monoxide alarm installation',
      'Electric shower, cooker and immersion heater circuits',
      'EV charge point installation and garden or garage supplies',
    ],
    process: [
      ['Test', 'We establish the condition of the existing installation before quoting for changes.'],
      ['Remedy', 'Coded faults addressed in priority order, with anything dangerous made safe immediately.'],
      ['Certify', 'You receive the certificate or report you need for compliance, insurance or letting.'],
    ],
    faqs: [
      ['How often does a rental property need an EICR?', 'Every five years for private rented homes in England, or sooner if the previous report recommends it. A copy must be given to tenants and to the local authority on request.'],
      ['Is your work notified to Building Control?', 'Yes, where Part P applies. You receive the compliance certificate for your records.'],
    ],
  },

  {
    slug: 'gardening-grounds',
    title: 'Gardening & Grounds',
    short: 'Gardening & Grounds',
    icon: 'leaf',
    image: '/assets/img/services/grounds.jpg',
    imageAlt: 'Well-maintained garden path with planted borders',
    teaser: 'Regular grounds maintenance and one-off garden clearances for homes, blocks and commercial sites.',
    intro:
      'Outside space is the first thing a visitor, tenant or buyer sees. We keep it under control on a schedule that suits the property — fortnightly through the growing season, or a single hard clearance to reset a garden that has got away.',
    lead:
      'Scheduled grounds maintenance, garden clearance and external tidying.',
    includes: [
      'Scheduled grass cutting, edging and strimming',
      'Hedge trimming, shrub pruning and border maintenance',
      'Seasonal garden clear-downs and overgrowth clearance',
      'Weed control to paths, drives, beds and communal areas',
      'Leaf clearance and gutter-line tidying in autumn',
      'Jet washing to patios, paths, driveways and decking',
      'Fencing repairs, gate adjustment and shed maintenance',
      'Communal grounds contracts for blocks and business parks',
    ],
    process: [
      ['Walk the site', 'We agree the scope and frequency, and what "tidy" means for this property.'],
      ['Set a schedule', 'A fixed visit pattern, so tenants and neighbours know when to expect us.'],
      ['Leave it clean', 'All arisings removed and disposed of under our waste carrier registration.'],
    ],
    faqs: [
      ['Do you take the waste away?', 'Yes. Green waste and clearance arisings are removed and disposed of legally — we will provide waste transfer documentation for commercial sites.'],
      ['Can we have a fixed monthly price?', 'For scheduled grounds maintenance, yes. We quote an annual figure and split it across twelve equal payments so budgeting is predictable.'],
    ],
  },

  {
    slug: 'cleaning-waste',
    title: 'Cleaning & Waste Clearance',
    short: 'Cleaning & Waste',
    icon: 'sparkle',
    image: '/assets/img/services/cleaning.jpg',
    imageAlt: 'Colour-coded waste and recycling bins at a managed property',
    teaser: 'Deep cleans, end-of-tenancy turnarounds, communal cleaning and licensed waste removal.',
    intro:
      'The unglamorous work that decides whether a property lets quickly, passes an inspection or simply feels cared for. We handle one-off deep cleans and ongoing communal cleaning contracts, and we are a registered waste carrier.',
    lead:
      'Deep cleaning, end-of-tenancy cleans, communal cleaning and licensed waste clearance.',
    includes: [
      'End-of-tenancy and pre-let deep cleans to inventory standard',
      'Post-builders and post-refurbishment sparkle cleans',
      'Scheduled communal area cleaning for blocks of flats',
      'Office, retail and light commercial cleaning',
      'Carpet and upholstery cleaning',
      'Oven, extractor and appliance deep cleaning',
      'House clearance and bulky waste removal',
      'Site waste removal under our registered waste carrier licence',
    ],
    process: [
      ['Scope', 'Room-by-room checklist agreed up front, so there is no argument about what was included.'],
      ['Clean', 'Worked methodically from the top down, with the right products for each surface.'],
      ['Evidence', 'Photographs on completion — useful for deposit disputes and remote landlords.'],
    ],
    faqs: [
      ['Will the clean pass an inventory check?', 'That is the standard we work to. If a check-out report flags something we cleaned, we will return and put it right at no charge.'],
      ['Are you licensed to remove waste?', 'Yes — we hold an Environment Agency waste carrier registration and dispose of everything through licensed transfer stations.'],
    ],
  },

  {
    slug: 'refurbishment',
    title: 'Refurbishment & Renovation',
    short: 'Refurbishment',
    icon: 'home',
    image: '/assets/img/services/refurbishment.jpg',
    imageAlt: 'Bright, newly refurbished open-plan living and kitchen space',
    teaser: 'Whole-property refurbishments and void turnarounds managed by one team, to one programme, with one point of contact.',
    intro:
      'Where a property needs more than a single trade, we take the whole thing on. One programme, one contact, one invoice — instead of chasing six subcontractors who each blame the last one.',
    lead:
      'Managed refurbishment of houses, flats, void properties and commercial units.',
    includes: [
      'Full property refurbishment, room by room or whole house',
      'Void property turnarounds to a fixed programme and budget',
      'Kitchen and bathroom removal, installation and making good',
      'Strip-out, first fix, second fix and finishing',
      'Structural alterations with approved Building Control sign-off',
      'HMO conversion works and compliance upgrades',
      'Commercial fit-out, partitioning and shopfront works',
      'Programme, budget and progress reporting throughout',
    ],
    process: [
      ['Survey and scope', 'A measured survey and a written specification, so the quote can be compared like for like.'],
      ['Programme', 'A dated programme showing each trade, so you know what happens in which week.'],
      ['Deliver and hand over', 'Weekly progress updates, a joint snagging walk-round, and certificates handed over as a pack.'],
    ],
    faqs: [
      ['How do you price refurbishments?', 'Against a written specification, itemised by element, with a clear allowance for anything that cannot be seen until work starts. Variations are agreed and priced in writing before they are carried out.'],
      ['How quickly can a void be turned around?', 'A straightforward one-bedroom flat is typically five to ten working days for clean, repair and redecorate. Anything involving a kitchen or bathroom replacement needs longer, and we will programme it properly rather than guess.'],
    ],
  },

  {
    slug: 'emergency-callout',
    title: 'Emergency & Out of Hours',
    short: 'Emergency Call-Out',
    icon: 'shield',
    image: '/assets/img/services/emergency.jpg',
    imageAlt: 'Site supervisor in hi-vis assessing a property',
    teaser: 'Escaping water, storm damage, lock-outs and failed heating — contained fast, outside office hours.',
    intro:
      'Things break at inconvenient times. For managed properties and contract clients we operate a 24/7 response line: the priority is always to make safe and contain the damage first, then put it right properly in daylight.',
    lead:
      'Round-the-clock emergency response for managed properties and contract clients.',
    includes: [
      'Escaping water — isolate, contain, dry out and repair',
      'Storm damage to roofs, fences, gates and outbuildings',
      'Emergency board-up and make-safe after break-ins',
      'Total loss of heating or hot water',
      'Electrical faults causing loss of power or exposed risk',
      'Blocked or overflowing drains and soil stacks',
      'Lock changes and emergency access',
      'Insurance-ready photographic records of the damage',
    ],
    process: [
      ['Call', 'One number, answered out of hours, with an engineer briefed rather than a message taken.'],
      ['Make safe', 'Isolate the source and contain the damage — the cheapest hour of any emergency.'],
      ['Reinstate', 'Full repair scheduled and completed once the property is stable.'],
    ],
    faqs: [
      ['Is out-of-hours cover available to everyone?', '24/7 cover is included for managed properties and maintenance contract clients. For everyone else we respond out of hours where we have an engineer available, at an out-of-hours rate agreed before we attend.'],
      ['What counts as an emergency?', 'Anything causing ongoing damage or making a property unsafe or uninhabitable — escaping water, no heating in winter, an insecure property, or an electrical fault.'],
    ],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
