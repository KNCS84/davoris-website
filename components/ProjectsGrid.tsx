'use client';
import React, { useMemo, useState } from 'react';
import { PROJECTS, SERVICES } from '@/content';
import { ProjectCard } from './cards';

export function ProjectsGrid() {
  const [filter, setFilter] = useState<string>('all');

  const filters = useMemo(
    () => [{ slug: 'all', name: 'All Work' }, ...SERVICES.map((s) => ({ slug: s.slug, name: s.name }))],
    []
  );

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by service"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '2.5rem',
        }}
      >
        {filters.map((f) => (
          <button
            key={f.slug}
            role="tab"
            aria-selected={filter === f.slug}
            onClick={() => setFilter(f.slug)}
            className={`btn ${filter === f.slug ? 'btn--orange' : 'btn--ghost btn--ghost-dark'}`}
            style={{ padding: '0.7em 1.1em' }}
          >
            {f.name}
          </button>
        ))}
      </div>

      <div className="card-grid card-grid--2">
        {visible.map((p, i) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-3" style={{ opacity: 0.7 }}>
          No projects in this category yet — get in touch to discuss your work.
        </p>
      )}
    </div>
  );
}
