import { Media } from './Media';
import { Button } from './Button';
import { SITE } from '@/content';

export function ClosingCta({
  label = "LET'S BUILD",
  h2 = 'Ready to talk about your project?',
  body = 'Whether this is the only service you need or one part of a larger project, we’re ready to scope it with you.',
  cta = 'Request a consultation',
}: {
  label?: string;
  h2?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="section cta-final">
      <Media src="/images/cta-final.png" className="cta-final__bg" />
      <div
        className="cta-final__overlay"
        style={{ background: 'linear-gradient(180deg, rgba(20,20,22,0.55), rgba(20,20,22,0.82))' }}
      />
      <div className="container cta-final__inner">
        <p className="eyebrow eyebrow--lime">{label}</p>
        <h2 className="h2 mt-2">{h2}</h2>
        <p className="lead mt-3 maxw-60">{body}</p>
        <div className="mt-3">
          <Button href="/contact" variant="orange">
            {cta}
          </Button>
        </div>
        <p className="cta-final__contact">
          {SITE.email} · {SITE.phone}
        </p>
      </div>
    </section>
  );
}