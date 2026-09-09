import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/content/services';
import { FAQS_GENERAL } from '@/content/faqs';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { Faq } from '@/components/sections/Faq';
import { PageCta } from '@/components/sections/PageCta';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Six service lines under one accountable team: water supply, road and street improvements, design-build, master planning, regulatory and funding liaison, and total project management.',
};

const SCOPING = [
  {
    n: '01',
    t: 'Listen before drawing.',
    d: 'One conversation and one walk of the ground set the real problem — not the assumed one.',
  },
  {
    n: '02',
    t: 'Price the scope, not the relationship.',
    d: 'A written scope, fee, and schedule. Assumptions and exclusions stated; changes priced before work.',
  },
  {
    n: '03',
    t: 'Coordinate before committing.',
    d: 'Agency and funder feedback arrives before design spend, while changing direction is still cheap.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
<<<<<<< HEAD
        titleLines={['Six lines.', 'One accountable team.']}
=======
        titleLines={['Seven lines.', 'One accountable team.']}
>>>>>>> 4afacbe (Reposition to Nigerian public-sector consultancy)
        lead="Every line is staffed end to end by the team that signs the as-built."
        image="/dno/project-masterplan.webp"
        alt=""
      />

      <Section tone="light">
        <Container>
          <ul className="svcrows">
            {SERVICES.map((s) => (
              <li className="svcrows__row" key={s.slug}>
                <Link href={`/services/${s.slug}`} className="svcrows__link" data-cursor="Open service">
                  <span className="svcrows__num mono-xs">{s.number}</span>
                  <span className="svcrows__main">
                    <span className="h3 svcrows__name">{s.name}</span>
                    <span className="mono svcrows__card">{s.card}</span>
                  </span>
                  <span className="svcrows__params">
                    {s.typical.slice(0, 3).map((t) => (
                      <span className="svcrows__param mono-xs" key={t.label}>
                        <span className="svcrows__param-k">{t.label}</span>
                        <span>{t.value}</span>
                      </span>
                    ))}
                  </span>
                  <span className="svcrows__arrow mono-xs" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="dark" ruleTop>
        <Container>
          <Eyebrow>How we scope</Eyebrow>
          <LineMask as="h2" className="h2 mt-stack" lines={['Fixed scope.', 'Written fee.', 'Real schedule.']} />
          <ul className="statement__list mt-block">
            {SCOPING.map((s) => (
              <li className="statement__row" key={s.n}>
                <span className="statement__n mono-xs">{s.n}</span>
                <h3 className="h3 statement__t">{s.t}</h3>
                <p className="body statement__d">{s.d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="light-alt" ruleTop>
        <Container>
          <div className="grid">
            <div className="col-4">
              <Eyebrow>Questions</Eyebrow>
              <LineMask as="h2" className="h2 mt-stack" lines={['Asked', 'often.']} />
            </div>
            <div className="col-8">
              <Faq items={FAQS_GENERAL} />
            </div>
          </div>
        </Container>
      </Section>

      <PageCta lines={['Not sure which line', 'your project needs?']} />
    </>
  );
}
