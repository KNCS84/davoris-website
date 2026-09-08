/* ==========================================================================
   ENGAGEMENT — STICKY-COLUMN. Removing ambiguity about what happens next is
   the conversion mechanism in B2B infrastructure.
   ========================================================================== */
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { Button } from '@/components/primitives/Button';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { CTA, CTA_SECONDARY } from '@/content/site';

const STEPS = [
  {
    n: '01',
    t: 'Scoping call & site walk',
    d: 'We listen before we draw. One conversation and one walk of the ground set the real problem.',
  },
  {
    n: '02',
    t: 'Proposal with fixed scope',
    d: 'A written scope, a written fee, and a written schedule. No open-ended engagements.',
  },
  {
    n: '03',
    t: 'Design with agency coordination',
    d: 'Regulatory and funding constraints are engineered in from the first line, not discovered late.',
  },
  {
    n: '04',
    t: 'Delivery & handover',
    d: 'Construction support through commissioning, then as-builts and O&M compiled and handed over.',
  },
];

export function Engagement() {
  return (
    <section className="section section--light-alt engage" id="approach">
      <Container>
        <div className="grid">
          <div className="col-5">
            <div className="engage__sticky">
              <Eyebrow>How it goes</Eyebrow>
              <LineMask as="h2" className="h2 mt-stack" lines={['You already know', 'what happens next.']} />
              <p className="lead mt-stack">
                Four steps, one accountable team, no ambiguity about scope, fee, or schedule.
              </p>
              <div className="engage__cta mt-block">
                <MagneticButton>
                  <Button href={CTA.href}>{CTA.label}</Button>
                </MagneticButton>
                <Button href={CTA_SECONDARY.href} variant="ghost">
                  {CTA_SECONDARY.label}
                </Button>
              </div>
            </div>
          </div>

          <div className="col-7">
            <ol className="engage__steps">
              {STEPS.map((s) => (
                <li className="engage__step" key={s.n}>
                  <span className="engage__n display">{s.n}</span>
                  <div className="engage__body">
                    <h3 className="h3">{s.t}</h3>
                    <p className="body engage__d">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
