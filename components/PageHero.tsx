import { Media } from './Media';
import { Reveal } from './Reveal';

export function PageHero({
  image,
  label,
  title,
  subhead,
}: {
  image: string;
  label: string;
  title: string;
  subhead?: string;
}) {
  return (
    <section className="pagehero">
      <Media src={image} className="pagehero__bg" gradient />
      <div
        className="pagehero__overlay"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,12,0.5), rgba(10,10,12,0.75))' }}
      />
      <div className="container pagehero__inner">
        <Reveal>
          <p className="eyebrow eyebrow--lime">{label}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h1 mt-2">{title}</h1>
        </Reveal>
        {subhead && (
          <Reveal delay={0.1}>
            <p className="lead mt-3">{subhead}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}