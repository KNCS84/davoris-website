import { SITE, SERVICES } from '@/content';

/** Organization + LocalBusiness structured data using the verified NAP. */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    name: SITE.company,
    description: SITE.tagline,
    url: SITE.domain,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: '1994-03-10',
    founder: { '@type': 'Person', name: 'Oriahi Davidson Ndidi' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oriahi House, 73 Ibusa Road, Umueze',
      addressLocality: 'Asaba',
      addressRegion: 'Delta State',
      postalCode: '320232',
      addressCountry: 'NG',
    },
    areaServed: 'Nigeria',
    knowsAbout: SERVICES.map((s) => s.name),
    sameAs: [SITE.domain],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
