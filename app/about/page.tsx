import type { Metadata } from 'next';
import { ABOUT, SITE } from '@/content';
import { PageHero } from '@/components/PageHero';
import { Media } from '@/components/Media';
import { Reveal } from '@/components/Reveal';
import { Stats } from '@/components/Stats';
import { IconDraw } from '@/components/IconDraw';
import { PILLAR_ICONS, IconCompass, IconInterlock, IconShield } from '@/components/icons';
import { Button } from '@/components/Button';
import { ClosingCta } from '@/components/ClosingCta';

export const metadata: Metadata = {
  title: 'About Davoris Limited | Civil Engineering Company in Asaba, Nigeria',
  description:
    'Learn about Davoris Limited’s history since 1994 delivering civil engineering, land development, and infrastructure projects across Delta State and Nigeria.',
};

const PILLAR_ICON_MAP: Record<string, typeof IconCompass> = {
  compass: IconCompass,
  interlock: IconInterlock,
  shield: IconShield,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={ABOUT.hero.image}
        label="ABOUT DAVORIS"
        title="Collaborative partners. Strong connections."
        subhead="For more than three decades, Davoris Limited has built its reputation one project, one partnership, and one solved problem at a time."
      />

      {/* Our Story */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <Media src={ABOUT.story.image} className="split__media" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="h2">A civil engineering firm built on partnership.</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="lead mt-3">
                Incorporated on 10 March 1994 (RC-240187) as a Private Limited Company, DAVORIS LIMITED has
                been a leader in civil engineering for over three decades, providing services across all
                types of projects and market sectors. Headquartered in Asaba, Delta State, we’ve built our
                practice on a simple belief: that strong infrastructure comes from strong relationships —
                with clients, communities, and the land itself.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3" style={{ opacity: 0.88 }}>
                Our civil specialties span municipal engineering, land development and surveying, building
                engineering, environmental services, transportation, and materials testing. This breadth
                allows us to serve as a single, accountable partner across the full lifecycle of a project —
                from the first survey to the final inspection — rather than one player in a fragmented chain
                of contractors.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3" style={{ opacity: 0.88 }}>
                We work with public agencies, private developers, and institutions who need engineering they
                can trust to be accurate, compliant, and built to last.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="reg-strip">
                Incorporated: 10 March 1994 · RC: 240187 · Private Limited Company
              </div>
            </Reveal>
          </div>
        </div>
      </section>

                  {/* Leadership */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <h2 className="h2">Leadership.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lead mt-3" style={{ maxWidth: '60ch' }}>
              Davoris Limited is led by professionals who treat every engagement — public or private — with
              the same standard of accountability.
            </p>
          </Reveal>

          <div className="split mt-4">
            <Reveal delay={0.1}>
              <Media src={ABOUT.leader.image} className="split__media" imagePosition="top" />
            </Reveal>
            <div>
              <Reveal delay={0.15}>
                <h3 className="h3">{ABOUT.leader.name}</h3>
                <p className="eyebrow eyebrow--lime mt-1">{ABOUT.leader.title}</p>
              </Reveal>
              {ABOUT.leader.bio.map((p, i) => (
                <Reveal key={i} delay={0.2 + i * 0.05}>
                  <p className="mt-3" style={{ opacity: 0.88 }}>
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="h2">How we work.</h2>
          </Reveal>
          <div className="mt-4" style={{ display: 'grid', gap: '1.5rem' }}>
            {ABOUT.pillars.map((p, i) => {
              const Icon = PILLAR_ICON_MAP[p.icon] || IconCompass;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="pillar">
                    <IconDraw>
                      <Icon />
                    </IconDraw>
                    <h3 className="pillar__title">{p.title}</h3>
                    <p style={{ opacity: 0.88, maxWidth: '60ch' }}>{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--offwhite-200">
        <div className="container">
          <Reveal>
            <h2 className="h2">What we stand for.</h2>
          </Reveal>
          <div className="values mt-4">
            {ABOUT.values.map((v, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="value">
                  <h3 className="value__title">{v.title}</h3>
                  <p className="value__desc">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="h2">Three decades of building.</h2>
          </Reveal>
          <div className="timeline mt-4">
            {ABOUT.milestones.map((m, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="timeline__item" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gap: '2rem' }}>
                  <div className="timeline__year">{m.year}</div>
                  <div>
                    <h3 className="h3" style={{ fontSize: '1.4rem' }}>
                      {m.title}
                    </h3>
                    <p className="mt-1" style={{ opacity: 0.85 }}>
                      {m.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--dark">
        <div className="container">
          <Stats />
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCta
        h2="Bring us your hardest problem."
        body="Whether it’s a municipal infrastructure project, a land development survey, or a building engineering challenge — if it demands precision and partnership, that’s where Davoris is most useful."
        cta="Request a consultation"
      />
    </>
  );
}