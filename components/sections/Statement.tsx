/* ==========================================================================
   STATEMENT — the home page's editorial position. Three numbered
   differentiators as hairline rows, never as equal feature cards.
   ========================================================================== */
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';

const POINTS = [
  {
    n: '01',
    t: 'One team, end to end.',
    d: 'The engineer who sets the alignment signs the as-built. Accountability is never diluted across hands.',
  },
  {
    n: '02',
    t: 'Approval engineered in.',
    d: 'Agency and funding constraints shape the design from the first line — not discovered at the end.',
  },
  {
    n: '03',
    t: 'Documented to the station.',
    d: 'Every decision is recorded so the finished work can be defended, maintained, and extended.',
  },
];

export function Statement() {
  return (
    <section className="section section--dark statement">
      <Container>
        <div className="grid">
          <div className="col-7">
            <Eyebrow>The standard</Eyebrow>
            <LineMask
              as="h2"
              className="h2 mt-stack"
              lines={['Public work is', 'public record.', 'We design for that.']}
            />
          </div>
          <div className="col-5 statement__aside">
            <p className="lead">
              Cities, water districts, and agencies cannot afford a consultant who improvises. Neither can we.
            </p>
          </div>
        </div>

        <ul className="statement__list mt-block">
          {POINTS.map((p) => (
            <li className="statement__row" key={p.n}>
              <span className="statement__n mono-xs">{p.n}</span>
              <h3 className="h3 statement__t">{p.t}</h3>
              <p className="body statement__d">{p.d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
