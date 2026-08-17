import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, SERVICE_SLUGS, getService } from '@/content';
import { PageHero } from '@/components/PageHero';
import { Media } from '@/components/Media';
import { Reveal } from '@/components/Reveal';
import { IncludesList, RelatedCard } from '@/components/cards';
import { ClosingCta } from '@/components/ClosingCta';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return { title: 'Service not found' };
  return { title: s.metaTitle, description: s.metaDescription };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* 1. Hero */}
      <PageHero image={service.heroImage} label={service.label} title={service.name} subhead={service.subhead} />

      {/* 2. Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: '920px' }}>
          {service.overview.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="lead mt-3">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. What This Includes */}
      <section className="section section--offwhite-200">
        <div className="container">
          <Reveal>
            <p className="eyebrow">WHAT THIS INCLUDES</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 mt-2">Scope of the work.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4" style={{ maxWidth: '920px' }}>
              <IncludesList items={service.includes} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Supporting image band */}
      <Media src={service.supportImage} className="imgband" />

      {/* 5. Our Process */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">OUR PROCESS</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 mt-2">How we deliver.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="process mt-4">
              {service.process.map((step, i) => (
                <div className="step" key={i}>
                  <div className="step__num">{step.num}</div>
                  <div className="step__title">{step.title}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Who This Is For */}
      <section className="section section--offwhite-200">
        <div className="container" style={{ maxWidth: '920px' }}>
          <Reveal>
            <p className="eyebrow">WHO THIS IS FOR</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lead mt-3">{service.whoFor}</p>
          </Reveal>
        </div>
      </section>

      {/* 7. Why It Matters */}
      <section className="section section--dark">
        <div className="container" style={{ maxWidth: '920px' }}>
          <Reveal>
            <p className="eyebrow eyebrow--lime">WHY IT MATTERS</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="callout-lime callout-lime--dark mt-3">{service.whyMatters}</p>
          </Reveal>
        </div>
      </section>

      {/* 8. Related Services */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">RELATED SERVICES</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 mt-2">Works well alongside.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="related-grid mt-4">
              {related.map((r) => (
                <RelatedCard key={r.slug} service={r} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Closing CTA */}
      <ClosingCta
        label="LET'S BUILD"
        h2="Ready to talk about your project?"
        body="Whether this is the only service you need or one part of a larger project, we’re ready to scope it with you."
        cta="Request a consultation"
      />
    </>
  );
}
