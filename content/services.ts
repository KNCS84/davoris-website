/* ==========================================================================
   DNO — SERVICE LINES
   All six lines trace to the client brief. Nothing invented.
   Card copy ≤ 12 words (copy doctrine).
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
  typical: { label: string; value: string }[]; // industry standards, labelled TYPICAL
  image: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'water-supply',
    number: '01',
    name: 'Water Supply & Distribution',
    card: 'Source-to-tap systems: mains, storage, booster, and treatment support.',
    lead: 'Potable water systems engineered for demand, pressure, and the decades after handover.',
    overview: [
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
    ],
    process: [
      { num: '01', title: 'Demand & Source Evaluation' },
      { num: '02', title: 'System Modelling & Sizing' },
      { num: '03', title: 'Design & Documentation' },
      { num: '04', title: 'Construction Support & Commissioning' },
    ],
    typical: [
      { label: 'Main material', value: 'Ductile iron, Class 350' },
      { label: 'Design velocity', value: '2.0 – 5.0 ft/s' },
      { label: 'Min. residual pressure', value: '35 psi at peak hour' },
      { label: 'Fire flow basis', value: 'Per ISO / insurance grade' },
    ],
    image: '/dno/project-water.png',
  },
  {
    slug: 'road-street',
    number: '02',
    name: 'Road & Street Improvements',
    card: 'Geometric design, pavement, drainage, and right-of-way reconstruction.',
    lead: 'Streets rebuilt to serve traffic, drainage, and the public that walks them.',
    overview: [
      'A street is infrastructure anyone can criticise and everyone depends on. We treat reconstruction as a public-facing act: geometry, drainage, and pedestrian access resolved together, not traded off in sequence.',
      'Alignment, cross-section, and pavement design are set against measured conditions, and every decision is recorded so the finished street can be explained to the people who fund it.',
    ],
    deliverables: [
      'Geometric and horizontal/vertical alignment design',
      'Pavement design and rehabilitation strategy',
      'Storm drainage and curb-and-gutter engineering',
      'Sidewalk, curb ramp, and pedestrian access design',
      'Traffic control and phasing plans',
      'Right-of-way and utility coordination',
    ],
    process: [
      { num: '01', title: 'Survey & Condition Assessment' },
      { num: '02', title: 'Alignment & Section Design' },
      { num: '03', title: 'Drainage & Utility Coordination' },
      { num: '04', title: 'Construction & As-Built' },
    ],
    typical: [
      { label: 'Design speed basis', value: 'Per AASHTO functional class' },
      { label: 'Pavement design', value: 'AASHTO 93 / ME as required' },
      { label: 'Cross-slope', value: '2.0% typical' },
      { label: 'Drainage return period', value: '10-yr minor / 50-yr major' },
    ],
    image: '/dno/project-road.png',
  },
  {
    slug: 'design-build',
    number: '03',
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
      { label: 'Change management', value: 'Documented, priced, approved in writing' },
    ],
    image: '/dno/section-positioning.png',
  },
  {
    slug: 'master-planning',
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
    image: '/dno/project-masterplan.png',
  },
  {
    slug: 'regulatory-funding',
    number: '05',
    name: 'Regulatory & Funding Liaison',
    card: 'State and federal agency coordination, from pre-application to closeout.',
    lead: 'We speak the language of the agencies that approve and fund the work.',
    overview: [
      'Approvals and funding are not paperwork at the end of a project — they are constraints that shape the design from the first line. We carry agency coordination inside the engineering, not beside it.',
      'Working relationships with state and federal regulatory and funding agencies are maintained continuously, so pre-application feedback arrives before money is spent on the wrong answer.',
    ],
    deliverables: [
      'Agency pre-application and scoping coordination',
      'Permitting strategy and documentation',
      'Funding-programme eligibility and application support',
      'Environmental and regulatory compliance documentation',
      'Reporting and closeout to funder requirements',
      'Continuing agency liaison during construction',
    ],
    process: [
      { num: '01', title: 'Programme & Agency Mapping' },
      { num: '02', title: 'Pre-Application Coordination' },
      { num: '03', title: 'Application & Permit Documentation' },
      { num: '04', title: 'Award, Reporting & Closeout' },
    ],
    typical: [
      { label: 'Frameworks navigated', value: 'EPA SRF · USDA-RD WWD · FEMA · State DOT' },
      { label: 'Coordination point', value: 'Pre-application, before design spend' },
      { label: 'Documentation', value: 'Funder-ready, audit-traceable' },
      { label: 'Continuity', value: 'Same team through closeout' },
    ],
    image: '/dno/section-proof.png',
  },
  {
    slug: 'project-management',
    number: '06',
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
      'Stakeholder and public communication support',
      'Quality management and design review gates',
      'Construction administration and site representation',
      'As-built documentation and handover',
    ],
    process: [
      { num: '01', title: 'Charter & Team Assignment' },
      { num: '02', title: 'Design & Control Baselines' },
      { num: '03', title: 'Construction Administration' },
      { num: '04', title: 'Handover & Post-Construction Review' },
    ],
    typical: [
      { label: 'Reporting cadence', value: 'Owner-set, minimum monthly' },
      { label: 'Budget control', value: 'Committed vs. forecast, every cycle' },
      { label: 'Quality gates', value: 'Independent review before issue' },
      { label: 'Handover', value: 'As-builts, O&M, warranties compiled' },
    ],
    image: '/dno/section-craft.png',
  },
];
