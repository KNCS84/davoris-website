import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SITE } from '@/content';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      company,
      phone,
      email,
      service,
      details,
      captcha,
      aVal,
      bVal,
    } = body as Record<string, string>;

    // Honeypot
    if ((body.company_url && String(body.company_url).trim() !== '') || (body.hp && String(body.hp).trim() !== '')) {
      return NextResponse.json({ ok: true, message: 'Received.' });
    }

    // Math CAPTCHA
    const expected = Number(aVal) + Number(bVal);
    if (String(captcha).trim() === '' || Number(captcha) !== expected) {
      return NextResponse.json({ ok: false, message: 'Spam check failed.' }, { status: 400 });
    }

    // Basic validation
    if (!fullName || !email || !details || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, message: 'Please complete all required fields.' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const toEmail = process.env.CONTACT_TO_EMAIL || SITE.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || `website@${new URL(SITE.domain).host}`;

    const text = `
New enquiry from the Davoris Limited website

Name: ${fullName}
Company: ${company || '—'}
Phone: ${phone || '—'}
Email: ${email}
Service of interest: ${service || '—'}

Project details:
${details}
    `.trim();

    // If SMTP is configured, send a real email. Otherwise log (so the flow is
    // verifiable) and report success — set SMTP_* env vars to enable delivery.
    if (smtpHost) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth:
          process.env.SMTP_USER && process.env.SMTP_PASS
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
      });
      await transporter.sendMail({
        from: `"Davoris Website" <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject: `New enquiry — ${fullName}`,
        text,
      });
    } else {
      console.log('[contact] SMTP not configured — message received:\n' + text);
    }

    return NextResponse.json({ ok: true, message: 'Message sent.' });
  } catch (err) {
    console.error('[contact] error', err);
    return NextResponse.json({ ok: false, message: 'Server error.' }, { status: 500 });
  }
}
