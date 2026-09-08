import type { MetadataRoute } from 'next';
import { SITE } from '@/content/site';
import { SERVICES } from '@/content/services';
import { ALL_PROJECTS } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: SITE.domain, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.domain}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.domain}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.domain}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.domain}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];
  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.domain}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));
  const projects: MetadataRoute.Sitemap = ALL_PROJECTS.map((p) => ({
    url: `${SITE.domain}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));
  return [...routes, ...services, ...projects];
}
