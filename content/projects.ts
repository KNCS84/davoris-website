/* ==========================================================================
   DNO — PROJECT ARCHIVE
   `kind: 'representative'` is mandatory while no client-approved records are
   supplied. Representative scope shows capability WITHOUT fabricating a
   client, location, or value. Flip `kind` to 'record' and fill the fields
   when the client releases an approved project.
   ========================================================================== */

export interface Project {
  slug: string;
  kind: 'representative' | 'record';
  title: string;
  scope: string;               // ≤ 12 words
  serviceSlug: string;
  image: string;
  client: string | null;       // null until approved
  location: string | null;
  value: string | null;
  year: string | null;
  parameters: { label: string; value: string }[]; // TYPICAL standards, not project facts
}

export const PROJECTS: Project[] = [
  {
    slug: 'water-main-replacement',
    kind: 'representative',
    title: 'Municipal Water Main Replacement',
    scope: 'Distribution main renewal with service resets and pavement restoration.',
    serviceSlug: 'water-supply',
    image: '/dno/project-water.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Typical diameter', value: '8 – 16 in ductile iron' },
      { label: 'Typical length', value: 'Linear per alignment' },
      { label: 'Restoration', value: 'Full-depth pavement, curb & gutter' },
    ],
  },
  {
    slug: 'street-reconstruction',
    kind: 'representative',
    title: 'Residential Street Reconstruction',
    scope: 'Full-depth reconstruction with drainage, sidewalk, and ADA ramps.',
    serviceSlug: 'road-street',
    image: '/dno/project-road.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Typical section', value: '2 travel lanes + parking' },
      { label: 'Drainage', value: 'Curb & gutter, closed system' },
<<<<<<< HEAD
      { label: 'Access', value: 'PROWAG-compliant ramps' },
=======
      { label: 'Access', value: 'Accessible ramps per national code' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
  },
  {
    slug: 'system-master-plan',
    kind: 'representative',
    title: 'Water System Master Plan',
    scope: 'Twenty-year capital plan sequenced against funding cycles.',
    serviceSlug: 'master-planning',
    image: '/dno/project-masterplan.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Horizon', value: '20-year, phased' },
      { label: 'Output', value: 'Adoptable capital improvement programme' },
<<<<<<< HEAD
      { label: 'Funding', value: 'SRF / USDA-RD aligned' },
=======
      { label: 'Funding', value: 'TETFUND / UBEC aligned' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    ],
  },
  {
    slug: 'pump-station-design-build',
    kind: 'representative',
    title: 'Booster Pump Station, Design-Build',
    scope: 'Single-contract delivery from concept through commissioning.',
    serviceSlug: 'design-build',
    image: '/dno/section-positioning.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Delivery', value: 'Design-build, single point' },
      { label: 'Scope', value: 'Structure, mechanical, electrical, controls' },
      { label: 'Closeout', value: 'Commissioning + O&M documentation' },
    ],
  },
];

/* ---- extended representative archive (added for a richer Work section) ---- */
export const PROJECTS_EXTENDED: Project[] = [
  {
    slug: 'rural-water-storage-booster',
    kind: 'representative',
    title: 'Rural Water District Storage & Booster',
    scope: 'Elevated storage evaluation with booster station and controls.',
    serviceSlug: 'water-supply',
    image: '/dno/section-proof.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Storage basis', value: 'Peak-day + fire reserve' },
      { label: 'Pressure zone', value: 'Single, booster-controlled' },
      { label: 'Controls', value: 'SCADA-ready, telemetry provision' },
    ],
  },
  {
    slug: 'downtown-drainage-improvements',
    kind: 'representative',
    title: 'Downtown Drainage Improvements',
    scope: 'Closed storm system reconstruction with roadway restoration.',
    serviceSlug: 'road-street',
    image: '/dno/section-craft.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Design storm', value: '10-yr minor / 50-yr major' },
      { label: 'Conveyance', value: 'Closed system, inlet spacing per spread' },
      { label: 'Restoration', value: 'Full-depth patch to centreline' },
    ],
  },
  {
    slug: 'county-operations-complex',
    kind: 'representative',
    title: 'County Operations Complex, Design-Build',
    scope: 'Single-contract delivery of a municipal operations facility.',
    serviceSlug: 'design-build',
    image: '/dno/section-close.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Delivery', value: 'Design-build, single point' },
      { label: 'Programme', value: 'Shops, storage, wash bay, offices' },
      { label: 'Site', value: 'Grading, utilities, paving, fencing' },
    ],
  },
  {
<<<<<<< HEAD
    slug: 'srf-funding-permit-support',
    kind: 'representative',
    title: 'SRF Funding & Permitting Support',
=======
    slug: 'intervention-funding-permit-support',
    kind: 'representative',
    title: 'Intervention Funding & Permitting Support',
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
    scope: 'Application, environmental, and permit documentation package.',
    serviceSlug: 'regulatory-funding',
    image: '/dno/hero-built.webp',
    client: null, location: null, value: null, year: null,
    parameters: [
<<<<<<< HEAD
      { label: 'Programme', value: 'State Revolving Fund alignment' },
=======
      { label: 'Programme', value: 'TETFUND / UBEC alignment' },
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
      { label: 'Documentation', value: 'Funder-ready, audit-traceable' },
      { label: 'Permitting', value: 'Coordinated pre-application' },
    ],
  },
];

export const ALL_PROJECTS: Project[] = [...PROJECTS, ...PROJECTS_EXTENDED];
