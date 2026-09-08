/* ==========================================================================
   The ONE kinetic marquee. It carries substantive content — the funding and
   regulatory frameworks the firm works inside — not decorative filler.
   ========================================================================== */
import { FRAMEWORKS } from '@/content/proof';
import { Marquee } from '@/components/motion/Marquee';

export function MarqueeStrip() {
  return (
    <div className="strip section--dark rule-top-dark">
      <p className="mono-xs strip__label container">Funding & regulatory frameworks</p>
      <Marquee items={FRAMEWORKS} />
    </div>
  );
}
