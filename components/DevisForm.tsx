'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { services } from '@/content/site';

type Status = 'idle' | 'sending' | 'sent' | 'not_configured' | 'error';

const messages: Partial<Record<Status, string>> = {
  sent: 'Merci, votre demande est bien partie. Glo Shine vous répondra par email ou par téléphone.',
  not_configured: 'Le formulaire n’est pas encore relié : votre demande n’a pas été envoyée. Aucune donnée n’a été conservée.',
  error: 'L’envoi a échoué et votre demande n’est pas partie. Vérifiez les champs puis réessayez.',
};

export function DevisForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const response = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(data), consent: data.get('consent') === 'on' }),
      });
      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus(response.status === 503 ? 'not_configured' : 'error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Nom
        <input name="name" autoComplete="name" required maxLength={120} />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" inputMode="email" required maxLength={200} />
      </label>
      <label>
        <span>Téléphone <span className="optional">(facultatif)</span></span>
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={40} />
      </label>
      <label>
        Ville
        <select name="city" required defaultValue="">
          <option value="" disabled>Choisir</option>
          <option>Liège</option>
          <option>Bruxelles</option>
          <option>Autre</option>
        </select>
      </label>
      <label>
        Prestation
        <select name="service" required defaultValue="">
          <option value="" disabled>Choisir</option>
          {services.items.map((service) => <option key={service.title}>{service.title}</option>)}
          <option>Entre deux locations (professionnels)</option>
          <option>Autre</option>
        </select>
      </label>
      <label>
        Votre logement et votre besoin
        <textarea name="message" rows={4} required maxLength={2000} placeholder="Surface, nombre de pièces, fréquence souhaitée…" />
      </label>
      <label className="trap" aria-hidden="true">
        Site web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input name="consent" type="checkbox" required />
        <span>
          J’accepte que Glo Shine utilise ces informations pour répondre à ma demande de devis. Je peux retirer mon accord à tout moment. <Link href="/confidentialite">Politique de confidentialité</Link>
        </span>
      </label>
      <button className="cta" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours…' : 'Demander un devis'}
      </button>
      <p className="form-status" data-status={status} role="status">{messages[status]}</p>
    </form>
  );
}
