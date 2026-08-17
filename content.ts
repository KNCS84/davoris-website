/* ============================================================
   DAVORIS LIMITED — CONTENT SOURCE OF TRUTH
   All copy, stats, and structured data live here. Pages,
   metadata, sitemap, and SEO schema are driven from this file.
   Images are referenced by path only (never hard-coded in JSX)
   so the client can swap them without a developer.
   ============================================================ */

export const SITE = {
  company: 'Davoris Limited',
  tagline: 'Collaborative Partners, Building Strong Connections',
  business: 'Nigerian civil engineering company',
  incorporated: '10 March 1994',
  registration: 'RC-240187',
  registrationType: 'Private Limited Company',
  email: 'davorislimited@yahoo.com',
  phone: '0803 303 7047',
  phoneHref: 'tel:+2348033037047',
  domain: 'https://davorislimited.com.ng',
  address: {
    line1: 'Oriahi House, Beside Winner’s Chapel,',
    line2: '73 Ibusa Road, Umueze, Asaba 320232, Delta State, Nigeria',
    city: 'Asaba',
    state: 'Delta State',
    country: 'Nigeria',
  },
  credits: 'Designed and Powered by KNCS',
} as const;

export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CTA = { label: 'Request a Consultation', href: '/contact' } as const;

/* Exact sitewide stats */
export const STATS = [
  { value: 30, suffix: '+', line1: 'YEARS IN CIVIL', line2: 'ENGINEERING' },
  { value: 6, suffix: '', line1: 'CORE SERVICE', line2: 'SPECIALTIES' },
  { value: 70, suffix: '+', line1: 'PROJECTS', line2: 'COMPLETED' },
  { value: 132, suffix: '', line1: 'PUBLIC & PRIVATE', line2: 'SECTOR CLIENTS' },
] as const;

export interface Service {
  slug: string;
  number: string;
  label: string;
  name: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  subhead: string;
  heroImage: string;
  supportImage: string;
  overview: [string, string];
  includes: string[];
  process: { num: string; title: string }[];
  whoFor: string;
  whyMatters: string;
  related: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'municipal-engineering',
    number: '01',
    label: 'SERVICE 01',
    name: 'Municipal Engineering',
    summary:
      'Infrastructure that serves communities — roads, drainage, water systems, and public facilities engineered for durability and long-term public value.',
    metaTitle: 'Municipal Engineering Services | Davoris Limited Nigeria',
    metaDescription:
      'Davoris Limited delivers municipal engineering — roads, drainage, water infrastructure, and public facilities — engineered for durability across Nigeria.',
    subhead:
      'Public infrastructure engineered to serve communities reliably for decades, not just at handover.',
    heroImage: '/images/hero-slide-1-municipal.png',
    supportImage: '/images/municipal-engineering-support.png',
    overview: [
      "Municipal infrastructure is the backbone of functioning communities — the roads people commute on, the drains that keep neighborhoods dry in the rains, the water systems families depend on daily. At Davoris Limited, we approach municipal engineering with the understanding that this work outlives the contract. A poorly designed drainage system doesn't just fail on paper — it floods homes for years afterward.",
      'We work with local government areas, state agencies, and private developers delivering public-facing infrastructure across Nigeria, bringing the same rigor to a neighborhood drainage upgrade as we would to a major road corridor.',
    ],
    includes: [
      'Road design and infrastructure engineering',
      'Stormwater drainage system design',
      'Water supply and distribution network engineering',
      'Public facility civil engineering support',
      'Site infrastructure planning for government and community projects',
      'Utility corridor planning and coordination',
      'Regulatory liaison with municipal and state authorities',
      'As-built documentation and infrastructure handover support',
    ],
    process: [
      { num: '01', title: 'Site & Community Assessment' },
      { num: '02', title: 'Engineering Design' },
      { num: '03', title: 'Regulatory Coordination' },
      { num: '04', title: 'Construction Support & Handover' },
    ],
    whoFor:
      'Local government areas, state ministries of works, community development associations, and private developers responsible for public-facing infrastructure within their projects.',
    whyMatters:
      'Infrastructure that fails becomes a recurring cost — repairs, floods, traffic disruption, community frustration. We engineer municipal systems to reduce that long-term burden, not just meet the minimum standard to pass inspection.',
    related: ['land-development-surveying', 'transportation', 'environmental-services'],
  },
  {
    slug: 'land-development-surveying',
    number: '02',
    label: 'SERVICE 02',
    name: 'Land Development & Surveying',
    summary:
      'Precise topographic and boundary surveying, site planning, and development engineering that gives every project a solid, accurate foundation.',
    metaTitle: 'Land Surveying & Development Services | Davoris Limited Nigeria',
    metaDescription:
      'Professional topographic and boundary surveying, plus land development engineering, from Davoris Limited across Nigeria.',
    subhead: 'Accurate data is the foundation every development decision should be built on.',
    heroImage: '/images/hero-slide-2-land-development.png',
    supportImage: '/images/land-development-surveying-support.png',
    overview: [
      "Land disputes, failed developments, and costly redesigns almost always trace back to the same root cause: inaccurate or incomplete survey data at the start. Davoris Limited provides precise topographic and boundary surveying combined with site development engineering — giving developers, landowners, and institutions the confidence to plan and build correctly the first time.",
      "Whether you're subdividing land for a residential estate, verifying boundaries before a commercial acquisition, or planning site layout for a new facility, our surveying work becomes the reference point every other engineering decision is built on.",
    ],
    includes: [
      'Topographic surveying',
      'Boundary and cadastral surveying',
      'Site development planning and layout design',
      'Land subdivision engineering',
      'Feasibility and site assessment support',
      'Contour mapping and earthworks planning',
      'Coordination with land registry and regulatory processes',
      'GPS/GIS-based site data collection',
    ],
    process: [
      { num: '01', title: 'Field Survey' },
      { num: '02', title: 'Data Processing & Mapping' },
      { num: '03', title: 'Development Planning' },
      { num: '04', title: 'Documentation & Registration Support' },
    ],
    whoFor:
      'Real estate developers, private landowners, institutions acquiring or subdividing property, and government agencies managing land records.',
    whyMatters:
      "An inaccurate survey doesn't just cause a delay — it can invalidate a development plan entirely after money has already been spent. We get the data right before anything else moves forward.",
    related: ['municipal-engineering', 'building-engineering', 'environmental-services'],
  },
  {
    slug: 'building-engineering',
    number: '03',
    label: 'SERVICE 03',
    name: 'Building Engineering',
    summary:
      'Structural, mechanical, and civil engineering support for residential, commercial, and institutional buildings — from concept through completion.',
    metaTitle: 'Building Engineering Services | Davoris Limited Nigeria',
    metaDescription:
      'Structural and civil engineering support for residential, commercial, and institutional buildings from Davoris Limited.',
    subhead:
      'Structural integrity isn’t negotiable — from the first foundation drawing to final inspection.',
    heroImage: '/images/hero-slide-3-building-engineering.png',
    supportImage: '/images/building-engineering-support.png',
    overview: [
      'A building is only as strong as the engineering behind it. Davoris Limited provides structural and civil engineering support for residential, commercial, and institutional buildings — working alongside architects and developers to ensure structures are safe, code-compliant, and built to specification from concept through construction.',
      "We treat every building project as a long-term responsibility. Our engineering doesn't stop at the drawing — we stay engaged through construction to catch issues before they become structural liabilities.",
    ],
    includes: [
      'Structural engineering design and review',
      'Foundation engineering',
      'Civil works coordination for building projects',
      'Construction documentation support',
      'Site supervision and engineering oversight',
      'Structural assessment of existing buildings',
      'Coordination with architects, contractors, and regulatory bodies',
      'Building code compliance review',
    ],
    process: [
      { num: '01', title: 'Structural Design' },
      { num: '02', title: 'Documentation' },
      { num: '03', title: 'Site Engineering Support' },
      { num: '04', title: 'Final Inspection & Sign-off' },
    ],
    whoFor:
      'Property developers, architects seeking engineering partnership, institutions constructing new facilities, and property owners requiring structural assessment of existing buildings.',
    whyMatters:
      'Structural failures rarely happen suddenly — they’re usually the result of a decision made months or years earlier. We engineer to prevent that decision from ever being made.',
    related: ['land-development-surveying', 'materials-testing', 'municipal-engineering'],
  },
  {
    slug: 'environmental-services',
    number: '04',
    label: 'SERVICE 04',
    name: 'Environmental Services',
    summary:
      'Environmental assessment, impact studies, and compliance support that protect communities and keep projects aligned with regulatory standards.',
    metaTitle: 'Environmental Engineering Services | Davoris Limited Nigeria',
    metaDescription:
      'Environmental assessment, impact studies, and regulatory compliance support from Davoris Limited across Nigeria.',
    subhead:
      'Responsible engineering considers what a project leaves behind, not just what it delivers.',
    heroImage: '/images/environmental-services-support.png',
    supportImage: '/images/environmental-services-support.png',
    overview: [
      "Civil engineering projects don't happen in isolation — they affect the land, water, and communities around them. Davoris Limited provides environmental assessment and compliance services that keep projects responsible, regulation-ready, and community-conscious from planning through completion.",
      'We help clients navigate environmental due diligence early, when addressing a concern is straightforward, rather than after construction has begun, when it becomes expensive and disruptive.',
    ],
    includes: [
      'Environmental impact assessments (EIA)',
      'Site environmental due diligence',
      'Regulatory compliance support and documentation',
      'Environmental monitoring during construction',
      'Community and stakeholder impact considerations',
      'Sustainable site planning guidance',
      'Erosion and drainage impact studies',
      'Liaison with environmental regulatory bodies',
    ],
    process: [
      { num: '01', title: 'Environmental Screening' },
      { num: '02', title: 'Impact Assessment' },
      { num: '03', title: 'Regulatory Documentation' },
      { num: '04', title: 'Ongoing Monitoring' },
    ],
    whoFor:
      'Developers and institutions whose projects require environmental clearance, government agencies overseeing public works, and organizations committed to responsible site development.',
    whyMatters:
      "Environmental non-compliance can halt a project entirely, sometimes after significant capital has already been committed. We build compliance in from the start so it's never a surprise later.",
    related: ['municipal-engineering', 'land-development-surveying', 'transportation'],
  },
  {
    slug: 'transportation',
    number: '05',
    label: 'SERVICE 05',
    name: 'Transportation',
    summary:
      'Road design, traffic engineering, and transportation infrastructure planning built to move people and goods safely and efficiently.',
    metaTitle: 'Transportation Engineering Services | Davoris Limited Nigeria',
    metaDescription:
      'Road design, traffic engineering, and transportation infrastructure planning from Davoris Limited across Nigeria.',
    subhead:
      'Infrastructure that moves people and goods safely, efficiently, and without unnecessary friction.',
    heroImage: '/images/hero-slide-4-transportation.png',
    supportImage: '/images/transportation-support.png',
    overview: [
      "Reliable transportation infrastructure is often invisible when it works well — and impossible to ignore when it doesn't. Davoris Limited provides road design, traffic engineering, and transportation infrastructure planning that supports both public road networks and private development access, engineered to function well from day one rather than requiring costly retrofits.",
      'Our transportation engineering considers not just vehicles, but the full range of road users — pedestrians, cyclists, and public transport — within the Nigerian urban and peri-urban context.',
    ],
    includes: [
      'Road and highway design',
      'Traffic impact studies',
      'Transportation infrastructure planning',
      'Access road engineering for developments',
      'Pedestrian and vehicular safety design',
      'Intersection and junction design',
      'Signage and road marking planning',
      'Coordination with transportation and highway authorities',
    ],
    process: [
      { num: '01', title: 'Traffic & Site Analysis' },
      { num: '02', title: 'Design Development' },
      { num: '03', title: 'Regulatory Coordination' },
      { num: '04', title: 'Construction Oversight' },
    ],
    whoFor:
      'Government transportation agencies, private developers requiring access road engineering, and institutions with significant vehicular or pedestrian traffic on-site.',
    whyMatters:
      "Poorly planned transportation infrastructure creates congestion and safety hazards that compound over time. We design for how a road will actually be used, not just how it looks on a plan.",
    related: ['municipal-engineering', 'environmental-services', 'land-development-surveying'],
  },
  {
    slug: 'materials-testing',
    number: '06',
    label: 'SERVICE 06',
    name: 'Materials Testing',
    summary:
      'Soil, concrete, and construction materials testing that verifies quality and protects the structural integrity of every project we touch.',
    metaTitle: 'Materials Testing Services | Davoris Limited Nigeria',
    metaDescription:
      'Soil, concrete, and construction materials testing from Davoris Limited, verifying quality and protecting structural integrity across Nigeria.',
    subhead: 'Quality construction starts with verified materials — not assumptions.',
    heroImage: '/images/materials-testing-support.png',
    supportImage: '/images/materials-testing-support.png',
    overview: [
      'Every structural failure has a starting point, and it’s often a material weakness that went undetected during construction. Davoris Limited provides soil, concrete, and construction materials testing that confirms a project meets the standards it was designed to meet — protecting structural integrity from the ground up.',
      'Our testing protocols are built into the construction process itself, not treated as a final checkbox. Catching a weak concrete pour or unstable soil condition during construction is inexpensive. Discovering it after the building is occupied is not.',
    ],
    includes: [
      'Soil testing and geotechnical analysis',
      'Concrete strength and quality testing',
      'Construction materials verification',
      'Compaction and density testing',
      'Laboratory and field testing services',
      'Aggregate and cement quality assessment',
      'Quality assurance documentation and reporting',
      'Ongoing testing throughout construction phases',
    ],
    process: [
      { num: '01', title: 'Site & Material Sampling' },
      { num: '02', title: 'Laboratory & Field Testing' },
      { num: '03', title: 'Reporting & Analysis' },
      { num: '04', title: 'Ongoing Verification' },
    ],
    whoFor:
      'Contractors and developers requiring quality assurance during construction, engineers needing geotechnical data for design, and institutions requiring compliance documentation.',
    whyMatters:
      "Undetected material weaknesses don't announce themselves — they surface years later as cracks, settlement, or structural failure. Our testing catches these problems while they're still inexpensive to fix.",
    related: ['building-engineering', 'municipal-engineering', 'land-development-surveying'],
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/* Home hero slides */
export interface HeroSlide {
  eyebrow: string;
  headline: string;
  subhead: string;
  image: string;
  serviceSlug: string;
}
export const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: 'CIVIL ENGINEERING · MUNICIPAL INFRASTRUCTURE',
    headline: 'Built for what’s next.',
    subhead:
      'Davoris Limited is a Nigerian civil engineering firm delivering municipal infrastructure, land development, building engineering, and transportation projects with the precision and accountability our partners depend on.',
    image: '/images/hero-slide-1-municipal.png',
    serviceSlug: 'municipal-engineering',
  },
  {
    eyebrow: 'LAND DEVELOPMENT · SURVEYING',
    headline: 'Precision from the ground up.',
    subhead:
      'Accurate topographic and boundary surveying that gives every development a solid foundation.',
    image: '/images/hero-slide-2-land-development.png',
    serviceSlug: 'land-development-surveying',
  },
  {
    eyebrow: 'BUILDING ENGINEERING · STRUCTURAL DESIGN',
    headline: 'Structures built to last.',
    subhead: 'Structural and civil engineering support from concept through construction.',
    image: '/images/hero-slide-3-building-engineering.png',
    serviceSlug: 'building-engineering',
  },
  {
    eyebrow: 'TRANSPORTATION · ROAD INFRASTRUCTURE',
    headline: 'Infrastructure that moves Nigeria forward.',
    subhead: 'Road design and transportation planning engineered for safety and efficiency.',
    image: '/images/hero-slide-4-transportation.png',
    serviceSlug: 'transportation',
  },
];

/* Home featured work (4) */
export interface Featured {
  category: string;
  title: string;
  desc: string;
  image: string;
}
export const FEATURED_WORK: Featured[] = [
  {
    category: 'Municipal Engineering',
    title: 'Road & Drainage Infrastructure',
    desc: 'Public works infrastructure designed for durability and community impact.',
    image: '/images/municipal-engineering-support.png',
  },
  {
    category: 'Land Development',
    title: 'Site Survey & Development Planning',
    desc: 'Accurate boundary and topographic surveying supporting confident development decisions.',
    image: '/images/land-development-surveying-support.png',
  },
  {
    category: 'Building Engineering',
    title: 'Commercial Development Support',
    desc: 'Engineering support delivered from concept through construction.',
    image: '/images/building-engineering-support.png',
  },
  {
    category: 'Materials Testing',
    title: 'Quality Assurance & Materials Verification',
    desc: 'Rigorous testing protocols protecting structural integrity on-site.',
    image: '/images/materials-testing-support.png',
  },
];

/* About page */
export const ABOUT = {
  hero: { image: '/images/about-leadership-background.png' },
  story: { image: '/images/about-story.png' },
  leader: {
    name: 'Oriahi Davidson Ndidi',
    title: 'Managing Director, Davoris Limited',
    image: '/images/about-leader-oriahi.png',
    bio: [
      'Oriahi Davidson Ndidi leads Davoris Limited as Managing Director, bringing a multi-sector leadership perspective shaped by his parallel role as Managing Director of Davoris and Wood Affairs Nigeria Limited. His experience spans both private and government project delivery, giving him a vantage point that few single-sector leaders have: the compliance discipline that public sector work demands, paired with the responsiveness and client focus that private development requires.',
      'Under his leadership, Davoris Limited has grown into a firm capable of managing multiple concurrent engagements without compromising the attention any single project deserves — a balance built on strong systems and teams trusted to execute, not simply directed to.',
      'He remains directly involved in how Davoris scopes and approaches new work, insisting that every project — whether commissioned by a private developer or a government agency — is held to the same standard of precision and accountability.',
    ],
  },
  leadershipSection: {
    backgroundImage: '/images/about-leadership-background.png',
  },
  pillars: [
    {
      icon: 'compass' as const,
      title: 'Precision First',
      desc: "Every project starts with accurate data — precise surveying, sound engineering calculations, and rigorous materials testing. We don't guess; we verify.",
    },
    {
      icon: 'interlock' as const,
      title: 'Partnership Over Transaction',
      desc: 'We see every client relationship as a long-term partnership. That means clear communication, honest timelines, and staying accountable after the contract is signed.',
    },
    {
      icon: 'shield' as const,
      title: 'Compliance & Quality Built In',
      desc: "From environmental assessments to materials testing, compliance isn't an afterthought — it's built into every phase of our process.",
    },
  ],
  values: [
    { title: 'Integrity', desc: 'We do the work right, even when no one is checking.' },
    { title: 'Precision', desc: 'Details matter. Small errors in civil engineering become large problems later.' },
    { title: 'Partnership', desc: 'We work alongside our clients, not just for them.' },
    { title: 'Accountability', desc: 'We stand behind the work we deliver, long after project handover.' },
  ],
  milestones: [
    {
      year: '1994',
      title: 'The beginning',
      body: 'Davoris Limited incorporated in Asaba, Delta State (RC-240187), beginning with municipal and building engineering work.',
    },
    {
      year: 'Growth',
      title: 'Expanding the practice',
      body: 'Expanded service offering to include land development, surveying, and transportation engineering.',
    },
    {
      year: 'Depth',
      title: 'Built-in compliance',
      body: 'Formalized environmental services and materials testing capability, strengthening compliance delivery for public and private clients.',
    },
    {
      year: 'Today',
      title: 'A full-service practice',
      body: '70+ projects delivered and 132 public and private sector clients served across Nigeria.',
    },
  ],
};

/* Projects (placeholder entries for client to replace) */
export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  scope: string;
  challenge: string;
  approach: string;
  outcome: string;
  image: string;
}
export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Riverside Drainage Upgrade',
    category: 'municipal-engineering',
    location: 'Nigeria',
    scope: 'Stormwater drainage design for a growing community.',
    challenge: 'Recurring seasonal flooding damaged homes and cut off access during peak rains.',
    approach: 'We assessed catchment flows, then engineered a drainage corridor sized for decade-scale rainfall with safe outfalls.',
    outcome: 'Flooding eliminated across the served area, with infrastructure handed over fully documented to the local authority.',
    image: '/images/municipal-engineering-support.png',
  },
  {
    id: 'p2',
    name: 'Estate Boundary Survey',
    category: 'land-development-surveying',
    location: 'Nigeria',
    scope: 'Topographic and boundary surveying for a residential subdivision.',
    challenge: 'Competing claims over parcel boundaries risked a stalled, disputed development.',
    approach: 'High-accuracy GPS/GIS field survey established defensible boundaries and a contour model for layout.',
    outcome: 'A clean subdivision plan advanced to registration without dispute, de-risking the entire development.',
    image: '/images/land-development-surveying-support.png',
  },
  {
    id: 'p3',
    name: 'Commercial Block Engineering',
    category: 'building-engineering',
    location: 'Nigeria',
    scope: 'Structural and civil engineering for a new commercial building.',
    challenge: 'Tight urban site with weak near-surface soils demanded careful foundation strategy.',
    approach: 'We designed foundation and structural systems with on-site engineering oversight through construction.',
    outcome: 'A code-compliant building delivered on schedule, with structural integrity verified at every stage.',
    image: '/images/building-engineering-support.png',
  },
  {
    id: 'p4',
    name: 'Access Road & Junction Design',
    category: 'transportation',
    location: 'Nigeria',
    scope: 'Access road and junction design for a private development.',
    challenge: 'New traffic from the development threatened to overload an existing junction.',
    approach: 'Traffic impact study informed a safer junction and access layout engineered for mixed road users.',
    outcome: 'Safer, compliant access approved by authorities, reducing long-term congestion risk.',
    image: '/images/transportation-support.png',
  },
  {
    id: 'p5',
    name: 'Environmental Clearance Support',
    category: 'environmental-services',
    location: 'Nigeria',
    scope: 'Environmental assessment and compliance documentation for a public works project.',
    challenge: 'The project required environmental clearance before construction could begin.',
    approach: 'Early screening and impact assessment produced the documentation regulators required, on time.',
    outcome: 'Clearance secured without costly rework, keeping the wider programme on track.',
    image: '/images/environmental-services-support.png',
  },
  {
    id: 'p6',
    name: 'Materials Verification Programme',
    category: 'materials-testing',
    location: 'Nigeria',
    scope: 'Soil and concrete testing across an active construction programme.',
    challenge: 'Undetected weak materials could compromise structural integrity after handover.',
    approach: 'Embedded sampling and laboratory testing verified soil and concrete quality throughout construction.',
    outcome: 'Quality confirmed at every phase, protecting the structure and the client’s long-term investment.',
    image: '/images/materials-testing-support.png',
  },
];

/* Footer service list (exact order) */
export const FOOTER_SERVICES = SERVICES.map((s) => ({ name: s.name, href: `/services/${s.slug}` }));
