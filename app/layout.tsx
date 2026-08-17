import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/content';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600'],
});
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.company} — ${SITE.tagline}`,
    template: `%s | ${SITE.company}`,
  },
  description: `${SITE.business} — ${SITE.tagline}. Incorporated 1994, Asaba, Delta State, Nigeria.`,
  keywords: [
    'civil engineering Nigeria',
    'municipal engineering',
    'land surveying Nigeria',
    'building engineering',
    'transportation engineering',
    'materials testing',
    'Asaba Delta State',
  ],
  authors: [{ name: SITE.company }],
  openGraph: {
    type: 'website',
    url: SITE.domain,
    siteName: SITE.company,
    title: `${SITE.company} — ${SITE.tagline}`,
    description: SITE.business,
  },
  twitter: { card: 'summary_large_image', title: `${SITE.company}`, description: SITE.tagline },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plex.variable}`}>
      <body>
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
