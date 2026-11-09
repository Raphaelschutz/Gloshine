import { NextResponse } from 'next/server';

const text = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'invalid' }, { status: 400 });

  // Champ invisible rempli : robot, on répond comme si tout allait bien sans rien transmettre.
  if (text(body.website, 200)) return NextResponse.json({ ok: true });

  const demande = {
    name: text(body.name, 120),
    phone: text(body.phone, 40),
    email: text(body.email, 200),
    commune: text(body.commune, 80),
    logement: text(body.logement, 80),
    message: text(body.message, 2000),
  };
  const emailOk = !demande.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(demande.email);
  const valid = demande.name && demande.phone && demande.commune && demande.logement && emailOk;
  if (!valid || body.consent !== true) return NextResponse.json({ error: 'invalid' }, { status: 400 });

  const webhook = process.env.DEVIS_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: 'not_configured' }, { status: 503 });

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...demande, consentAt: new Date().toISOString() }),
  }).catch(() => null);
  if (!response?.ok) return NextResponse.json({ error: 'upstream' }, { status: 502 });

  return NextResponse.json({ ok: true });
}
