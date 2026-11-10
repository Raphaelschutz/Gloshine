'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Spark } from '@/components/PrimaryButton';
import { site } from '@/content/site';

type Status = 'idle' | 'sending' | 'sent' | 'not_configured' | 'error';

const messages: Partial<Record<Status, string>> = {
  sent: 'Merci, votre demande est bien partie. Nous vous recontactons pour fixer la visite.',
  not_configured: `Le formulaire n’est pas encore relié : votre demande n’a pas été envoyée. Appelez le ${site.phone.label}.`,
  error: 'L’envoi a échoué et votre demande n’est pas partie. Vérifiez les champs puis réessayez.',
};

export function VisitForm() {
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
      <div className="form-row">
        <label>
          Nom
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Téléphone
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={40} />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Email <span className="optional">(facultatif)</span></span>
          <input name="email" type="email" autoComplete="email" inputMode="email" maxLength={200} />
        </label>
        <label>
          Commune
          <input name="commune" autoComplete="address-level2" required maxLength={80} />
        </label>
      </div>
      <label>
        Type de logement
        <select name="logement" required defaultValue="">
          <option value="" disabled>Choisir</option>
          <option>Appartement</option>
          <option>Maison</option>
          <option>Logement Airbnb ou location courte durée</option>
          <option>Autre</option>
        </select>
      </label>
      <label>
        <span>Message <span className="optional">(facultatif)</span></span>
        <textarea name="message" rows={4} maxLength={2000} placeholder="Nombre de pièces, fréquence souhaitée, disponibilités pour la visite…" />
      </label>
      <label className="trap" aria-hidden="true">
        Site web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input name="consent" type="checkbox" required />
        <span>
          J’accepte que Glo Shine Cleaning utilise ces informations pour me recontacter au sujet de ma demande de visite. Je peux retirer mon accord à tout moment. <Link href="/confidentialite">Politique de confidentialité</Link>
        </span>
      </label>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours…' : site.cta}
        <Spark />
      </button>
      <p className="form-status" role="status">{messages[status]}</p>
    </form>
  );
}
