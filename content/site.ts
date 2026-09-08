/* ==========================================================================
   DNO — SITE CONSTANTS
   Single source of truth for identity, nav, contact, legal.
   Nothing here is hard-coded in JSX.
   ========================================================================== */

export const SITE = {
  name: 'DNO Engineering Consultants Limited',
  short: 'DNO',
  wordmark: 'DNO',
  sector: 'Consulting Engineering — Municipal & Water Infrastructure',
  positioning:
    'Consulting engineers to cities, water districts, and agencies. Total project management, from master plan to final inspection.',
  // {{CLIENT TO SUPPLY}} — contact block ships as title-block fields until filled.
  email: null,
  phone: null,
  phoneHref: null,
  addressLine1: null,
  addressLine2: null,
  domain: 'https://dno-engineering.example',
  registration: null, // e.g. state PE firm registration / DBE-WBE certs
  founded: null,
  credits: null,
} as const;

export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/projects' },
  { label: 'Approach', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CTA = {
  label: 'Start a project',
  href: '/contact',
} as const;

export const CTA_SECONDARY = {
  label: 'Request qualifications',
  href: '/contact',
} as const;
