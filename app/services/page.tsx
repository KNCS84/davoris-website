import type { Metadata } from 'next';
import { SERVICES } from '@/content';
import { PageHero } from '@/components/PageHero';
import { ServiceCard } from '@/components/cards';
import { Reveal } from '@/components/Reveal';
import { ClosingCta } from '@/components/ClosingCta';

export const metadata: Metadata = {
  title: 'Civil Engineering Services | Davoris Limited, Asaba, Nigeria',
  description:
    'Explore Davoris Limited’s civil engineering services — municipal engineering, land development & surveying, building engineering, environmental services, transportation, and materials testing.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/services-hero.png"
        label="SERVICES"
        title="Capability built for complexity."
        subhead="Six specialties. One accountable team. Davoris Limited delivers civil engineering services across the full project lifecycle."
      />

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        h2="Not sure which specialty your project needs?"
        body="Most projects touch more than one. Tell us what you’re trying to build and we’ll scope the engineering support around it."
        cta="Request a consultation"
      />
    </>
  );
}
