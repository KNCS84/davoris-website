/* ==========================================================================
   DNO — PROOF / CREDENTIALS
   HARD RULE: numbers are client-supplied or null. Null renders as a
   drawing title-block field ({{TOKEN}}), never as an invented figure.
   Counters activate automatically the moment a number is filled in.
   ========================================================================== */

export interface Stat {
  key: string;
  value: number | null;   // null => CLIENT TO SUPPLY
  suffix?: string;
  prefix?: string;
  labelLine1: string;
  labelLine2: string;
  token: string;          // shown in the title-block field while null
}

export const STATS: Stat[] = [
  { key: 'years',    value: null, suffix: '+', labelLine1: 'YEARS IN',        labelLine2: 'PRACTICE',        token: '{{YEARS}}' },
  { key: 'projects', value: null, suffix: '+', labelLine1: 'PROJECTS',        labelLine2: 'DELIVERED',       token: '{{PROJECTS}}' },
  { key: 'clients',  value: null, suffix: '',  labelLine1: 'PUBLIC & PRIVATE', labelLine2: 'CLIENTS SERVED', token: '{{CLIENTS}}' },
  { key: 'states',   value: null, suffix: '',  labelLine1: 'STATES',          labelLine2: 'OF JURISDICTION', token: '{{STATES}}' },
];

/* Secondary proof strip — also client-supplied. */
export const PROOF_SECONDARY: Stat[] = [
  { key: 'capital',  value: null, prefix: '$', suffix: 'M', labelLine1: 'CAPITAL VALUE',  labelLine2: 'MANAGED',  token: '{{CAPITAL_M}}' },
  { key: 'ontime',   value: null, suffix: '%',              labelLine1: 'DELIVERED ON',   labelLine2: 'TIME & BUDGET', token: '{{ONTIME_PCT}}' },
];

/* Funding & regulatory frameworks — real US programmes; the marquee lists the
   landscape the firm works in (supported by the brief), not a credential claim. */
export const FRAMEWORKS = [
=======
  'TETFUND Intervention Programmes',
  'UBEC / SUBEB Basic Education',
  'Federal Ministry of Works',
  'State Ministries of Works',
  'RUWASSA Water & Sanitation',
  'World Bank / IDA-Assisted Programmes',
=======
];
