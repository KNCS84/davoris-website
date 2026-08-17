import type { Metadata } from 'next';
import { SITE } from '@/content';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { MapGraphic } from '@/components/MapGraphic';

export const metadata: Metadata = {
  title: 'Contact Davoris Limited | Civil Engineering Company in Asaba, Nigeria',
  description:
    'Contact Davoris Limited for civil engineering, land surveying, and construction services in Asaba, Delta State, Nigeria. Call 0803 303 7047 or email davorislimited@yahoo.com.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/contact-hero.png"
        label="CONTACT"
        title="Bring us your hardest problem."
        subhead="Whether it’s a municipal project, a land survey, or a building engineering challenge — let’s talk about how Davoris can help."
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <Reveal>
              <h2 className="h2">Davoris Limited</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="contact-block mt-3" style={{ opacity: 0.9 }}>
                <p>{SITE.address.line1}</p>
                <p>{SITE.address.line2}</p>
                <p className="mt-2">
                  Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
                <p>
                  Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="map-wrap mt-4">
                <MapGraphic />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
