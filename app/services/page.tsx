import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { LineMask } from '@/components/motion/LineMask';
import { Eyebrow } from '@/components/primitives/Eyebrow';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Six service lines under one accountable team: water supply, road and street improvements, design-build, master planning, regulatory and funding liaison, and total project management.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        titleLines={['Six lines.', 'One accountable team.']}
        lead="Every line is staffed end to end by the team that signs the as-built."
        image="/dno/project-masterplan.webp"
        alt=""
      />

      <Section tone="light">
        <Container>
          <ul className="cap__list">
            {SERVICES.map((s) => (
              <li className="cap__row" key={s.slug}>
                <Link href={`/services/${s.slug}`} className="cap__link">
                  <span className="cap__num mono-xs">{s.number}</span>
                  <span className="cap__name h3">{s.name}</span>
                  <span className="cap__card mono">{s.card}</span>
                  <span className="cap__arrow mono-xs" aria-hidden="true">
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
          <Eyebrow>How we work</Eyebrow>
          <LineMask as="h2" className="h2 mt-stack" lines={['The same rigour,', 'every line.']} />
          <p className="lead mt-stack">
            Scoping, design, agency coordination, and handover — one team, one record, no diluted accountability.
          </p>
        </Container>
      </Section>
    </>
  );
}
