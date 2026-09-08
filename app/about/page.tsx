import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { FRAMEWORKS } from '@/content/proof';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How DNO works: one accountable team, approval engineered in from the first line, and documentation that survives audit.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        titleLines={['Drawn. Checked.', 'Approved.']}
        lead="A practice built on the discipline of the drawing set — and on standing behind it."
        image="/dno/section-craft.webp"
        alt=""
      />

      <Section tone="light">
        <Container>
          <div className="grid">
            <div className="col-7">
              <Eyebrow>Who we are</Eyebrow>
              <LineMask as="h2" className="h2 mt-stack" lines={['Engineers to the', 'public interest.']} />
            </div>
            <div className="col-5">
              <p className="body mt-stack">
                DNO Engineering Consultants Limited provides professional consulting engineering to cities,
                municipalities, industries, rural water districts, and federal and state agencies.
              </p>
              <p className="body mt-stack">
                We pay strict attention to detail in planning and design, adhere to timelines and budgets, and
                maintain working relationships with state and federal regulatory and funding agencies.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark" ruleTop>
        <Container>
          <Eyebrow>What we hold to</Eyebrow>
          <ul className="engage__steps mt-block">
            {[
              ['I', 'On time is a design constraint.', 'Schedules are engineered, not promised.'],
              ['II', 'On budget is a deliverable.', 'Cost opinions trace to unit basis, updated every cycle.'],
              ['III', 'On record is a responsibility.', 'Documentation is audit-traceable from survey to closeout.'],
            ].map(([k, t, d]) => (
              <li className="engage__step" key={k}>
                <span className="engage__n display">{k}</span>
                <div className="engage__body">
                  <h3 className="h3">{t}</h3>
                  <p className="body engage__d">{d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-block">
            <p className="mono-xs" style={{ color: 'var(--muted-on-dark)' }}>
              Frameworks we work inside: {FRAMEWORKS.join(' · ')}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
