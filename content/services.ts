/* ==========================================================================
<<<<<<< HEAD
   DNO — SERVICE LINES
   All six lines trace to the client brief. Nothing invented.
   Card copy ≤ 12 words (copy doctrine).
=======
   DNO — SERVICE LINES (Nigerian public-sector positioning)
   Seven lines. Building & Institutional leads because the delivered record
   (TETFUND 2015, UBEC/SUBEB 2018 interventions) proves it first-hand.
   Standards/units are Nigerian/metric practice. Card copy ≤ 12 words.
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
   ========================================================================== */

export interface Service {
  slug: string;
  number: string;
  name: string;
  card: string;              // ≤ 12 words — the index row line
  lead: string;              // ≤ 22 words
  overview: string[];        // ≤ 3 sentences / ≤ 45 words each
  deliverables: string[];
  process: { num: string; title: string }[];
<<<<<<< HEAD
  typical: { label: string; value: string }[]; // industry standards, labelled TYPICAL
=======
  typical: { label: string; value: string }[]; // practice-typical standards, labelled TYPICAL
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
  image: string;
}

export const SERVICES: Service[] = [
  {
<<<<<<< HEAD
    slug: 'water-supply',
    number: '01',
=======
    slug: 'building-institutional',
    number: '01',
    name: 'Building & Institutional Engineering',
    card: 'Lecture theatres, classroom blocks, and institutional facilities, delivered.',
    lead: 'Institutional buildings engineered for public use, public money, and public scrutiny.',
    overview: [
      'Our delivered institutional work includes TETFUND and UBEC/SUBEB intervention projects — lecture theatre complexes and classroom blocks planned, designed, and supervised to handover.',
      'Public buildings carry public accountability. We engineer structure, services, and finishes for heavy daily use, low maintenance budgets, and the audit that follows completion.',
    ],
    deliverables: [
      'Architectural–civil–structural coordination',
      'Structural design and foundation engineering',
      'Mechanical, electrical, and fan/ventilation coordination',
      'Bills of quantities and tender documentation',
      'Construction supervision and site representation',
      'Commissioning, defects liability, and handover',
    ],
    process: [
      { num: '01', title: 'Feasibility & Client Brief' },
      { num: '02', title: 'Design & Tender Documentation' },
      { num: '03', title: 'Construction Supervision' },
      { num: '04', title: 'Commissioning & Handover' },
    ],
    typical: [
      { label: 'Lecture theatre capacity', value: '200 – 500 seats, tiered' },
      { label: 'Structure', value: 'RC frame, reinforced slab' },
      { label: 'Roof / ceiling', value: 'Long-span aluminium, insulated board' },
      { label: 'Finishes', value: 'Institutional-grade, maintainable' },
    ],
    image: '/dno/project-designbuild.webp', // interim; swaps to real record photo on ingest
  },
  {
    slug: 'water-supply',
    number: '02',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    name: 'Water Supply & Distribution',
    card: 'Source-to-tap systems: mains, storage, booster, and treatment support.',
    lead: 'Potable water systems engineered for demand, pressure, and the decades after handover.',
    overview: [
<<<<<<< HEAD
      'A water system is judged long after the ribbon is cut — by pressure at the far hydrant, by a main that does not fail in winter, by storage that holds through a power outage. We design for that judgement.',
      'From source evaluation through distribution modelling to final commissioning, every alignment, diameter, and material choice is documented so the system can be defended, maintained, and extended.',
    ],
    deliverables: [
      'Distribution system modelling and pressure-zone analysis',
      'Water main alignment, sizing, and material selection',
      'Storage tank and booster pump station design',
      'Treatment and filtration engineering support',
      'Service line and metering infrastructure design',
      'Construction documents and bidding assistance',
=======
      'A water scheme is judged long after commissioning — by pressure at the far standpipe, by a main that does not fail, by storage that holds through an outage. We design for that judgement.',
      'From source evaluation through distribution modelling to commissioning, every alignment, diameter, and material choice is documented so the scheme can be defended, maintained, and extended.',
    ],
    deliverables: [
      'Distribution modelling and pressure-zone analysis',
      'Main alignment, sizing, and material selection',
      'Storage tank and booster station design',
      'Treatment and filtration engineering support',
      'Borehole, standpipe, and reticulation design',
      'Tender documentation and bidding assistance',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    process: [
      { num: '01', title: 'Demand & Source Evaluation' },
      { num: '02', title: 'System Modelling & Sizing' },
      { num: '03', title: 'Design & Documentation' },
<<<<<<< HEAD
      { num: '04', title: 'Construction Support & Commissioning' },
    ],
    typical: [
      { label: 'Main material', value: 'Ductile iron, Class 350' },
      { label: 'Design velocity', value: '2.0 – 5.0 ft/s' },
      { label: 'Min. residual pressure', value: '35 psi at peak hour' },
      { label: 'Fire flow basis', value: 'Per ISO / insurance grade' },
=======
      { num: '04', title: 'Supervision & Commissioning' },
    ],
    typical: [
      { label: 'Main material', value: 'DI / uPVC, PN10 – PN16' },
      { label: 'Design velocity', value: '0.6 – 1.5 m/s' },
      { label: 'Min. residual head', value: '10 m at peak hour' },
      { label: 'Design life', value: '50 years, maintainable' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    image: '/dno/project-water.webp',
  },
  {
    slug: 'road-street',
<<<<<<< HEAD
    number: '02',
    name: 'Road & Street Improvements',
    card: 'Geometric design, pavement, drainage, and right-of-way reconstruction.',
    lead: 'Streets rebuilt to serve traffic, drainage, and the public that walks them.',
    overview: [
      'A street is infrastructure anyone can criticise and everyone depends on. We treat reconstruction as a public-facing act: geometry, drainage, and pedestrian access resolved together, not traded off in sequence.',
      'Alignment, cross-section, and pavement design are set against measured conditions, and every decision is recorded so the finished street can be explained to the people who fund it.',
=======
    number: '03',
    name: 'Roads, Streets & Drainage',
    card: 'Geometric design, pavement, drainage, and pedestrian access.',
    lead: 'Streets and access roads rebuilt to carry traffic, storm water, and people safely.',
    overview: [
      'A street is infrastructure anyone can criticise and everyone depends on. We treat reconstruction as a public act: geometry, drainage, and pedestrian access resolved together, not traded off in sequence.',
      'Alignment, cross-section, and pavement design are set against measured conditions, and every decision is recorded so the finished street can be explained to the people who funded it.',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    deliverables: [
      'Geometric and horizontal/vertical alignment design',
      'Pavement design and rehabilitation strategy',
<<<<<<< HEAD
      'Storm drainage and curb-and-gutter engineering',
      'Sidewalk, curb ramp, and pedestrian access design',
      'Traffic control and phasing plans',
      'Right-of-way and utility coordination',
=======
      'Storm drainage and kerb-and-channel engineering',
      'Walkways, kerbs, and pedestrian access design',
      'Traffic management and construction phasing',
      'Utility coordination and as-built documentation',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    process: [
      { num: '01', title: 'Survey & Condition Assessment' },
      { num: '02', title: 'Alignment & Section Design' },
      { num: '03', title: 'Drainage & Utility Coordination' },
      { num: '04', title: 'Construction & As-Built' },
    ],
    typical: [
<<<<<<< HEAD
      { label: 'Design speed basis', value: 'Per AASHTO functional class' },
      { label: 'Pavement design', value: 'AASHTO 93 / ME as required' },
      { label: 'Cross-slope', value: '2.0% typical' },
      { label: 'Drainage return period', value: '10-yr minor / 50-yr major' },
=======
      { label: 'Design basis', value: 'FMW Highway Manual / AASHTO' },
      { label: 'Pavement', value: 'Laterite/stone base, bituminous wear' },
      { label: 'Cross-fall', value: '2.5% typical' },
      { label: 'Drainage', value: '10-yr minor / 50-yr major' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    image: '/dno/project-road.webp',
  },
  {
    slug: 'design-build',
<<<<<<< HEAD
    number: '03',
=======
    number: '04',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    name: 'Design-Build Delivery',
    card: 'Single-point accountability from concept through commissioning.',
    lead: 'One contract, one accountable team, one schedule the owner can hold.',
    overview: [
      'Design-build collapses the gap between the drawing and the built thing — which is exactly where cost and schedule go to die. We structure delivery so accountability is never diluted across hands.',
      'Owner-side or delivery-side, we hold the design intent through procurement, construction, and commissioning, so what gets built is what was engineered.',
    ],
    deliverables: [
      'Delivery-model evaluation and procurement strategy',
      'Owner’s representative and design oversight',
      'Constructability and value-engineering review',
      'Construction-phase design services and RFIs',
      'Commissioning and performance verification',
      'Closeout, as-builts, and O&M documentation',
    ],
    process: [
      { num: '01', title: 'Delivery Strategy' },
      { num: '02', title: 'Procurement & Award' },
      { num: '03', title: 'Design & Construction Integration' },
      { num: '04', title: 'Commissioning & Closeout' },
    ],
    typical: [
      { label: 'Accountability', value: 'Single point of contact' },
      { label: 'Schedule control', value: 'Integrated baseline, monthly update' },
      { label: 'Cost control', value: 'Open-book where applicable' },
<<<<<<< HEAD
      { label: 'Change management', value: 'Documented, priced, approved in writing' },
=======
      { label: 'Changes', value: 'Priced and approved in writing' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    image: '/dno/section-positioning.webp',
  },
  {
    slug: 'master-planning',
<<<<<<< HEAD
    number: '04',
    name: 'Master Planning',
    card: 'Capital plans that sequence growth against real budgets.',
    lead: 'Twenty-year capital strategy, sequenced into projects a council can fund.',
    overview: [
      'A master plan fails when it cannot be funded. We build capital plans that sequence need against realistic revenue and grant cycles, so the document survives contact with a budget hearing.',
      'Growth projections, system capacity, and condition data are reconciled into a prioritised programme with costs a reviewer can trace.',
    ],
    deliverables: [
      'System capacity and growth-demand analysis',
      'Condition assessment and asset inventory',
      'Capital improvement programme and phasing',
      'Cost opinions traceable to unit basis',
      'Funding and grant-alignment strategy',
=======
    number: '05',
    name: 'Master Planning',
    card: 'Capital plans that sequence growth against real budgets.',
    lead: 'Long-horizon capital strategy, sequenced into projects a council can fund.',
    overview: [
      'A master plan fails when it cannot be funded. We build capital plans that sequence need against realistic revenue and intervention cycles, so the document survives contact with a budget hearing.',
      'Growth projections, system capacity, and condition data are reconciled into a prioritised programme with costs a reviewer can trace.',
    ],
    deliverables: [
      'Capacity and growth-demand analysis',
      'Condition assessment and asset inventory',
      'Capital improvement programme and phasing',
      'Cost opinions traceable to unit basis',
      'Funding and intervention-alignment strategy',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
      'Public-meeting and council presentation support',
    ],
    process: [
      { num: '01', title: 'Data & Condition Baseline' },
      { num: '02', title: 'Demand & Capacity Modelling' },
      { num: '03', title: 'Programme & Phasing' },
      { num: '04', title: 'Adoption & Funding Alignment' },
    ],
    typical: [
      { label: 'Planning horizon', value: '20-year, 5-yr update cycle' },
      { label: 'Cost basis', value: 'Unit costs, escalated, sourced' },
      { label: 'Prioritisation', value: 'Weighted condition / risk / demand' },
      { label: 'Deliverable', value: 'Adoptable capital plan' },
    ],
    image: '/dno/project-masterplan.webp',
  },
  {
    slug: 'regulatory-funding',
<<<<<<< HEAD
    number: '05',
    name: 'Regulatory & Funding Liaison',
    card: 'State and federal agency coordination, from pre-application to closeout.',
    lead: 'We speak the language of the agencies that approve and fund the work.',
    overview: [
      'Approvals and funding are not paperwork at the end of a project — they are constraints that shape the design from the first line. We carry agency coordination inside the engineering, not beside it.',
      'Working relationships with state and federal regulatory and funding agencies are maintained continuously, so pre-application feedback arrives before money is spent on the wrong answer.',
=======
    number: '06',
    name: 'Regulatory & Funding Liaison',
    card: 'Funder and agency coordination, from pre-application to closeout.',
    lead: 'We speak the language of the agencies that approve and fund the work.',
    overview: [
      'Approvals and funding are not paperwork at the end of a project — they are constraints that shape the design from the first line. We carry agency coordination inside the engineering, not beside it.',
      'Working relationships with federal and state funding and regulatory bodies are maintained continuously, so pre-application feedback arrives before money is spent on the wrong answer.',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    deliverables: [
      'Agency pre-application and scoping coordination',
      'Permitting strategy and documentation',
<<<<<<< HEAD
      'Funding-programme eligibility and application support',
      'Environmental and regulatory compliance documentation',
      'Reporting and closeout to funder requirements',
      'Continuing agency liaison during construction',
=======
      'Intervention-programme eligibility and application support',
      'Regulatory compliance documentation',
      'Reporting and closeout to funder requirements',
      'Continuing liaison during construction',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    process: [
      { num: '01', title: 'Programme & Agency Mapping' },
      { num: '02', title: 'Pre-Application Coordination' },
      { num: '03', title: 'Application & Permit Documentation' },
      { num: '04', title: 'Award, Reporting & Closeout' },
    ],
    typical: [
<<<<<<< HEAD
      { label: 'Frameworks navigated', value: 'EPA SRF · USDA-RD WWD · FEMA · State DOT' },
=======
      { label: 'Frameworks navigated', value: 'TETFUND · UBEC/SUBEB · FMW · RUWASSA' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
      { label: 'Coordination point', value: 'Pre-application, before design spend' },
      { label: 'Documentation', value: 'Funder-ready, audit-traceable' },
      { label: 'Continuity', value: 'Same team through closeout' },
    ],
    image: '/dno/section-proof.webp',
  },
  {
    slug: 'project-management',
<<<<<<< HEAD
    number: '06',
=======
    number: '07',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    name: 'Total Project Management',
    card: 'One team carries the project from first survey to final inspection.',
    lead: 'The same accountable team, from the first survey stake to the last signature.',
    overview: [
      'Projects fail when accountability is diluted across too many hands. We staff each project to carry it end to end, so the engineer who set the alignment is the engineer who signs the as-built.',
      'Schedule, budget, and scope are tracked in one place and reported on a cadence the owner sets — not the one that is convenient.',
    ],
    deliverables: [
      'Single-point project leadership',
      'Integrated schedule and budget control',
<<<<<<< HEAD
      'Stakeholder and public communication support',
=======
      'Stakeholder and community communication support',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
      'Quality management and design review gates',
      'Construction administration and site representation',
      'As-built documentation and handover',
    ],
    process: [
      { num: '01', title: 'Charter & Team Assignment' },
      { num: '02', title: 'Design & Control Baselines' },
      { num: '03', title: 'Construction Administration' },
<<<<<<< HEAD
      { num: '04', title: 'Handover & Post-Construction Review' },
=======
      { num: '04', title: 'Handover & Post-Completion Review' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
    typical: [
      { label: 'Reporting cadence', value: 'Owner-set, minimum monthly' },
      { label: 'Budget control', value: 'Committed vs. forecast, every cycle' },
      { label: 'Quality gates', value: 'Independent review before issue' },
      { label: 'Handover', value: 'As-builts, O&M, warranties compiled' },
    ],
    image: '/dno/section-craft.webp',
  },
];
