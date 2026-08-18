'use client';
import React, { useEffect, useState } from 'react';
import { SERVICES, SITE } from '@/content';

type Status = { type: 'idle' | 'ok' | 'err'; msg: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: 'idle', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  // Math CAPTCHA operands (regenerated per mount)
  const [captchaNums, setCaptchaNums] = useState<{ a: number; b: number } | null>(null);
  useEffect(() => {
    const x = Math.floor(Math.random() * 7) + 2;
    const y = Math.floor(Math.random() * 7) + 2;
    setCaptchaNums({ a: x, b: y });
  }, []);
  const a = captchaNums?.a ?? 0;
  const b = captchaNums?.b ?? 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'idle', msg: '' });

    const form = new FormData(e.currentTarget);
    const honeypot = (form.get('hp') as string) || '';
    const answer = (form.get('captcha') as string) || '';
    const expected = (form.get('aVal') as string) + (form.get('bVal') as string);

    // Honeypot must be empty
    if (honeypot.trim() !== '') {
      setStatus({ type: 'err', msg: 'Submission blocked.' });
      setSubmitting(false);
      return;
    }
    // Math CAPTCHA
    if (parseInt(answer, 10) !== a + b) {
      setStatus({ type: 'err', msg: 'Please check your answer to the spam question.' });
      setSubmitting(false);
      return;
    }

    const payload = {
      fullName: form.get('fullName'),
      company: form.get('company'),
      phone: form.get('phone'),
      email: form.get('email'),
      service: form.get('service'),
      details: form.get('details'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, captcha: answer, aVal: String(a), bVal: String(b) }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ type: 'ok', msg: 'Thank you — your message has been sent. We will be in touch shortly.' });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'err', msg: data.message || 'Something went wrong. Please try again or email us directly.' });
      }
    } catch {
      setStatus({ type: 'err', msg: 'Network error. Please email us at ' + SITE.email + ' directly.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'none' }} aria-hidden="true">
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" />
    </div>

      <div className="form__row form__row--2">
        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">Company / Organization</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="form__row form__row--2">
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">Service of Interest</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="details">Project Details</label>
        <textarea id="details" name="details" required />
      </div>

      <div className="form__row form__row--2">
        <div className="field">
          <label htmlFor="captcha">
            Spam check: what is {captchaNums ? `${a} + ${b}` : '...'}?
          </label>
          <input id="captcha" name="captcha" type="text" inputMode="numeric" required autoComplete="off" />
          <input type="hidden" name="aVal" value={a} />
          <input type="hidden" name="bVal" value={b} />
        </div>
        <div className="field" style={{ justifyContent: 'flex-end' }}>
          <button type="submit" className="btn btn--orange" disabled={submitting} style={{ width: '100%' }}>
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </div>

      {status.type !== 'idle' && (
        <p className={`form__status ${status.type === 'ok' ? 'form__status--ok' : 'form__status--err'}`} role="status">
          {status.msg}
        </p>
      )}
    </form>
  );
}
