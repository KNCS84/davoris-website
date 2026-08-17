import type { MetadataRoute } from 'next';
import { SITE, SERVICES } from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const routes = ['', '/about', '/services', '/projects', '/contact'];
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const all = [...routes, ...serviceRoutes];
  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
