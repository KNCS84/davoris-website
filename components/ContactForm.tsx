'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/primitives/Button';

const SERVICES_OPTIONS = [
  'Building & Institutional Engineering',
  'Water Supply & Distribution',
  'Roads, Streets & Drainage',
=======
  'Building & Institutional Engineering',
  'Water Supply & Distribution',
  'Roads, Streets & Drainage',
  'Design-Build Delivery',
  'Master Planning',
  'Regulatory & Funding Liaison',
  'Total Project Management',
  'Not sure yet',
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('bad response');
      setStatus('sent');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__field">
        <label className="mono-xs" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="form__field">
        <label className="mono-xs" htmlFor="org">
          Organisation / agency
        </label>
        <input id="org" name="organisation" type="text" required autoComplete="organization" />
      </div>
      <div className="form__field">
        <label className="mono-xs" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="form__field">
        <label className="mono-xs" htmlFor="service">
          Service line
        </label>
        <select id="service" name="service" defaultValue={SERVICES_OPTIONS[6]}>
          {SERVICES_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="form__field">
        <label className="mono-xs" htmlFor="message">
          The project, in a few lines
        </label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <div>
        <Button type="submit">Send inquiry</Button>
      </div>

      <p className="form__status mono-xs" role="status" aria-live="polite">
        {status === 'sending' && 'Sending…'}
        {status === 'sent' && 'Received. We respond to qualified inquiries within the week.'}
        {status === 'error' && 'Something failed on our side. Please email us directly.'}
      </p>
    </form>
  );
}
