/* ==========================================================================
   Field — the honest placeholder. When a client-supplied value is absent we
   render a drawing title-block field (dashed rule + mono token) rather than
   an invented figure. On-theme for an engineering firm; never a fake number.
   ========================================================================== */
export function Field({ token, label, className = '' }: { token: string; label?: string; className?: string }) {
  return (
    <span className={`field ${className}`} title="Client to supply">
      <span className="field__token mono-xs">{token}</span>
      {label ? <span className="field__label mono-xs">{label}</span> : null}
    </span>
  );
}
