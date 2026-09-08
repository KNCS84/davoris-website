/* ==========================================================================
   Faq — native <details>/<summary> accordion. No JS required, keyboard
   accessible by default, and content is present without scripting.
   ========================================================================== */
import type { Faq as FaqItem } from '@/content/faqs';

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details className="faq__item" key={f.q}>
          <summary className="faq__q h4">
            {f.q}
            <span className="faq__mark mono-xs" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="body faq__a">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
