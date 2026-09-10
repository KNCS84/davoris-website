'use client';

import { useMemo, useState } from 'react';
import { ALL_PROJECTS, type Project } from '@/content/projects';
import { SERVICES } from '@/content/services';
import { ProjectCard } from '@/components/ProjectCard';

export function WorkFilter({ projects }: { projects?: Project[] }) {
  const [active, setActive] = useState<string>('all');
  const source = projects ?? ALL_PROJECTS;

  const chips = useMemo(
    () => [
      { slug: 'all', name: 'All work' },
      ...SERVICES.map((s) => ({ slug: s.slug, name: s.name })),
    ],
    []
  );

  const shown = active === 'all' ? source : source.filter((p) => p.serviceSlug === active);

  return (
    <>
      <div className="workfilter" role="group" aria-label="Filter work by service line">
        {chips.map((c) => (
          <button
            key={c.slug}
            className={`workfilter__chip mono-xs ${active === c.slug ? 'is-active' : ''}`}
            onClick={() => setActive(c.slug)}
            aria-pressed={active === c.slug}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="proj__grid mt-block">
        {shown.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>

      <p className="mono-xs workfilter__note mt-block">
        Client-attributed records release on approval. Until then every entry is labelled representative
        scope — capability shown, credentials never invented.
      </p>
    </>
  );
}
