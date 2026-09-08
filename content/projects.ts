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
    image: '/dno/project-water.png',
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
    image: '/dno/project-road.png',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Typical section', value: '2 travel lanes + parking' },
      { label: 'Drainage', value: 'Curb & gutter, closed system' },
      { label: 'Access', value: 'PROWAG-compliant ramps' },
    ],
  },
  {
    slug: 'system-master-plan',
    kind: 'representative',
    title: 'Water System Master Plan',
    scope: 'Twenty-year capital plan sequenced against funding cycles.',
    serviceSlug: 'master-planning',
    image: '/dno/project-masterplan.png',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Horizon', value: '20-year, phased' },
      { label: 'Output', value: 'Adoptable capital improvement programme' },
      { label: 'Funding', value: 'SRF / USDA-RD aligned' },
    ],
  },
  {
    slug: 'pump-station-design-build',
    kind: 'representative',
    title: 'Booster Pump Station, Design-Build',
    scope: 'Single-contract delivery from concept through commissioning.',
    serviceSlug: 'design-build',
    image: '/dno/section-positioning.png',
    client: null, location: null, value: null, year: null,
    parameters: [
      { label: 'Delivery', value: 'Design-build, single point' },
      { label: 'Scope', value: 'Structure, mechanical, electrical, controls' },
      { label: 'Closeout', value: 'Commissioning + O&M documentation' },
    ],
  },
];
