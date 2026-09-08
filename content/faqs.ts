/* ==========================================================================
   DNO — FAQ. Answers ≤ 3 sentences / ≤ 45 words (copy doctrine).
   No credential claims; reference-style answers defer to client approval.
   ========================================================================== */

export interface Faq {
  q: string;
  a: string;
}

export const FAQS_GENERAL: Faq[] = [
  {
    q: 'How early should we involve you before a funding application?',
    a: 'Before design spend, ideally at scoping. Pre-application coordination with the funding agency shapes scope, cost basis, and schedule — changes after submission are expensive and sometimes disqualifying.',
  },
  {
    q: 'Do you work alongside our existing engineer of record?',
    a: 'Yes. We regularly act as specialist or supporting consultant under an existing EOR, and as EOR with specialist support. The proposal states roles, seals, and lines of communication in writing.',
  },
  {
    q: 'Can you provide references from similar jurisdictions?',
    a: 'On request. Client-attributed references are released with the client’s approval, matched to your jurisdiction type, project size, and funding programme.',
  },
  {
    q: 'What does a typical proposal include?',
    a: 'A written scope, a written fee, and a written schedule, plus assumptions and exclusions. No open-ended engagements; anything outside scope is priced and approved before work begins.',
  },
  {
    q: 'Do you take private and industrial work?',
    a: 'Yes — industries, developers, and institutions are part of our practice. Public-sector procedures inform how we document and control every project, regardless of owner.',
  },
];

export const FAQS_CONTACT: Faq[] = [
  {
    q: 'What happens after I send an inquiry?',
    a: 'A qualified inquiry gets a response within the week, usually a scoping call. After the call you receive a written scope, fee, and schedule — or an honest referral if we are not the right firm.',
  },
  {
    q: 'What should I have ready for the first call?',
    a: 'Nothing formal. A boundary, a problem statement, and any deadline driven by a funding cycle or council date is enough to start a useful conversation.',
  },
  {
    q: 'Is the first conversation billable?',
    a: 'No. Scoping calls and site walks to determine fit are part of how we work, not a billed service.',
  },
];
