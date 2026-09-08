import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Field } from '@/components/primitives/Field';
import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with DNO Engineering Consultants. Same-week response to qualified inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleLines={['Start the', 'conversation.']}
        lead="Tell us the problem. We will tell you whether we are the right firm for it."
        image="/dno/section-close.webp"
        alt=""
      />

      <Section tone="dark">
        <Container>
          <div className="grid">
            <div className="col-7">
              <ContactForm />
            </div>
            <div className="col-5">
              <Eyebrow>Direct</Eyebrow>
              <ul className="footer__list mono mt-stack">
                <li>{SITE.email ? <a href={`mailto:${SITE.email}`}>{SITE.email}</a> : <Field token="{{EMAIL}}" />}</li>
                <li>{SITE.phone ? <a href={SITE.phoneHref ?? '#'}>{SITE.phone}</a> : <Field token="{{PHONE}}" />}</li>
                <li>{SITE.addressLine1 ?? <Field token="{{ADDRESS_1}}" />}</li>
                <li>{SITE.addressLine2 ?? <Field token="{{ADDRESS_2}}" />}</li>
              </ul>
              <p className="mono-xs mt-block" style={{ color: 'var(--accent)' }}>
                Same-week response to qualified inquiries
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
