import { SERVICES, FEATURED_WORK, SITE } from '@/content';
import { HeroSlider } from '@/components/HeroSlider';
import { ServiceCard, FeaturedCard } from '@/components/cards';
import { Stats } from '@/components/Stats';
import { Button } from '@/components/Button';
import { Media } from '@/components/Media';
import { Reveal } from '@/components/Reveal';

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Value Statement */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--lime">OUR APPROACH</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 maxw-60 mt-2">
              Collaborative partners. Strong connections. Solid ground.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-3">
              Since 1994, Davoris Limited has built its reputation one project, one partnership, and one
              solved problem at a time. We don’t just design and build — we listen, plan, and stay
              accountable from the first survey stake to the final inspection. Every project is a
              relationship, not a transaction.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="accent-line mt-3">Precision on the ground. Partnership at every stage.</p>
          </Reveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section--offwhite-200">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">WHAT WE DO</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">Civil engineering built on real expertise.</h2>
            </Reveal>
          </div>
          <div className="card-grid card-grid--3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-4">
            <Button href="/services" variant="ghost">
              Explore our services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Davoris + stats */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--lime">WHY DAVORIS</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 maxw-60 mt-2">The partner that stays accountable.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-3">
              Civil engineering projects fail when accountability gets diluted across too many hands. At
              Davoris, our team carries projects through from planning to delivery — reducing
              miscommunication, protecting your timeline, and ensuring the work reflects the standard
              we’d accept for ourselves.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-4">
              <Stats />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">SELECTED WORK</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">Systems that can’t afford to fail.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                From municipal infrastructure to private development, our work reflects the range and rigor
                of a full-service civil engineering practice.
              </p>
            </Reveal>
          </div>
          <div className="card-grid card-grid--2">
            {FEATURED_WORK.map((f, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <FeaturedCard item={f} />
              </Reveal>
            ))}
          </div>
          <div className="mt-4">
            <Button href="/projects" variant="ghost">
              View all projects
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-final">
        <Media src="/images/cta-final.png" className="cta-final__bg" />
        <div className="cta-final__overlay" />
        <div className="container cta-final__inner">
          <Reveal>
            <p className="eyebrow eyebrow--lime">LET’S BUILD</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1 mt-2">Bring us your hardest problem.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-3">
              The projects worth building are rarely simple. If it’s technically demanding, schedule-critical,
              or mission-critical to your operation — that’s exactly where we’re most useful.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-3">
              <Button href="/contact" variant="orange">
                Start the conversation
              </Button>
            </div>
            <p className="cta-final__contact">
              {SITE.email} · {SITE.phone}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
