import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Malformed body' }, { status: 400 });
  }

  const required = ['name', 'organisation', 'email', 'message'];
  const missing = required.filter((k) => !body[k] || String(body[k]).trim() === '');
  if (missing.length) {
    return NextResponse.json({ ok: false, error: `Missing: ${missing.join(', ')}` }, { status: 422 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;

  if (host && user && pass && to) {
    try {
      const nodemailer = await import('nodemailer');
      const transport = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user, pass },
      });
      await transport.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || user,
        to,
        subject: `Project inquiry — ${body.organisation}`,
        text: [
          `Name: ${body.name}`,
          `Organisation: ${body.organisation}`,
          `Email: ${body.email}`,
          `Service: ${body.service ?? '—'}`,
          '',
          String(body.message),
        ].join('\n'),
      });
      return NextResponse.json({ ok: true, delivered: true });
    } catch (e) {
      return NextResponse.json({ ok: false, error: 'Mail delivery failed' }, { status: 502 });
    }
  }

  // SMTP not configured: acknowledge and log rather than failing the user.
  console.info('[contact] inquiry received (SMTP not configured):', {
    name: body.name,
    organisation: body.organisation,
    email: body.email,
    service: body.service,
  });
  return NextResponse.json({ ok: true, delivered: false, note: 'SMTP not configured; inquiry logged.' });
}
