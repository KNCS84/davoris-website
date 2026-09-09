import type { Metadata } from 'next';
import '@fontsource-variable/archivo/wdth.css'; // wght + wdth axes, self-hosted
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './globals.css';
import { SITE, NAV } from '@/content/site';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Cursor } from '@/components/motion/Cursor';

// Fonts are self-hosted via Fontsource (variable, incl. Archivo wdth axis).
// Family names are wired in styles/tokens.css. No next/font, no external CDN.

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — ${SITE.sector}`,
    template: `%s | ${SITE.short}`,
  },
  description:
=======
    'Consulting engineers to governments, institutions, and agencies across Nigeria. Building and institutional engineering, water supply, roads and drainage, design-build delivery, and master planning — total project management from feasibility to handover.',
  keywords: [
    'civil engineering Nigeria',
    'institutional building engineering',
    'TETFUND intervention consultant',
    'UBEC SUBEB classroom projects',
    'water supply engineering Nigeria',
    'master planning Nigeria',
=======
  ],
  openGraph: {
    type: 'website',
    url: SITE.domain,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.sector}`,
    description: SITE.positioning,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.name,
  description: SITE.positioning,
  url: SITE.domain,
  areaServed: 'United States',
  knowsAbout: [
=======
    'Building and institutional engineering',
    'Water supply and distribution engineering',
    'Roads, streets and drainage',
    'Design-build delivery',
    'Public-sector master planning',
=======
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Progressive-enhancement gate: motion that hides content is armed
            ONLY when JS is present, so no-JS users see everything. */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
