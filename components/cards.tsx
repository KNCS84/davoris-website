import Link from 'next/link';
import React from 'react';
import { Service, Featured, Project } from '@/content';
import { Media } from './Media';
import { Button } from './Button';
import { IconTick } from './icons';

/* Service summary card → links to detail page */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="scard">
      <span className="scard__num">{service.number}</span>
      <h3 className="scard__title">{service.name}</h3>
      <p className="scard__desc">{service.summary}</p>
      <div className="scard__link">
        <Button href={`/services/${service.slug}`} variant="ghost">
          Explore
        </Button>
      </div>
    </article>
  );
}

/* Featured work preview card (duotone hover) */
export function FeaturedCard({ item }: { item: Featured }) {
  const slug = item.category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return (
    <article className="pcard">
      <Link href={`/services/${slug}`} aria-label={item.title} style={{ display: 'block' }}>
        <div className="pcard__media">
          <Media src={item.image} className="pcard__img" />
          <div className="pcard__duotone" />
        </div>
        <div className="pcard__body">
          <div className="pcard__tags">
            <span className="tag tag--lime">{item.category}</span>
            <span className="tag">Nigeria</span>
          </div>
          <h3 className="h3" style={{ fontSize: '1.4rem' }}>
            {item.title}
          </h3>
          <p style={{ opacity: 0.85 }}>{item.desc}</p>
        </div>
      </Link>
    </article>
  );
}

/* Project card (used in filterable grid) */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pcard" data-category={project.category}>
      <div className="pcard__media">
        <Media src={project.image} className="pcard__img" />
        <div className="pcard__duotone" />
      </div>
      <div className="pcard__body">
        <div className="pcard__tags">
          <span className="tag tag--lime">{project.category.replace(/-/g, ' ')}</span>
          <span className="tag">{project.location}</span>
        </div>
        <h3 className="h3" style={{ fontSize: '1.45rem' }}>
          {project.name}
        </h3>
        <p style={{ opacity: 0.85 }}>{project.scope}</p>
        <details style={{ marginTop: '0.6rem' }}>
          <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}>
            Challenge / Approach / Outcome
          </summary>
          <p className="mt-2" style={{ fontSize: '0.92rem', opacity: 0.9 }}>
            <strong>Challenge:</strong> {project.challenge}
          </p>
          <p className="mt-2" style={{ fontSize: '0.92rem', opacity: 0.9 }}>
            <strong>Approach:</strong> {project.approach}
          </p>
          <p className="mt-2" style={{ fontSize: '0.92rem', opacity: 0.9 }}>
            <strong>Outcome:</strong> {project.outcome}
          </p>
        </details>
      </div>
    </article>
  );
}

/* Related service card (detail pages) */
export function RelatedCard({ service }: { service: Service }) {
  return (
    <article className="scard">
      <span className="scard__num">{service.number}</span>
      <h3 className="scard__title">{service.name}</h3>
      <p className="scard__desc">{service.summary}</p>
      <div className="scard__link">
        <Button href={`/services/${service.slug}`} variant="ghost">
          View service
        </Button>
      </div>
    </article>
  );
}

/* "What this includes" list with line-drawn ticks */
export function IncludesList({ items }: { items: string[] }) {
  return (
    <ul className="includes">
      {items.map((it, i) => (
        <li key={i}>
          <span className="tick">
            <IconTick />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
