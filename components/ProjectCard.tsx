import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/content/projects';
import { Field } from '@/components/primitives/Field';

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link className="proj__card" href={`/projects/${p.slug}`} data-cursor="View record">
      <div className="proj__media">
        <Image src={p.image} alt={p.title} fill sizes="(max-width:900px) 100vw, 50vw" loading="lazy" />
        {p.kind === 'representative' && (
          <span className="proj__tag mono-xs">Representative scope</span>
        )}
      </div>
      <h3 className="h3 mt-stack">{p.title}</h3>
      <p className="mono mt-inline proj__scope">{p.scope}</p>
      <div className="proj__params">
        {p.parameters.slice(0, 2).map((par) => (
          <div className="proj__param mono-xs" key={par.label}>
            <span className="proj__param-k">{par.label}</span>
            <span>{par.value}</span>
          </div>
        ))}
        <div className="proj__param mono-xs">
          <span className="proj__param-k">Client</span>
          {p.client ? <span>{p.client}</span> : <Field token="{{ON APPROVAL}}" />}
        </div>
      </div>
    </Link>
  );
}
