import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Todo } from '@/components/Todo';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Mentions légales | Glo Shine' };

const missing = <Todo>À FOURNIR</Todo>;

export default function MentionsLegales() {
  return (
    <main className="legal">
      <Link href="/"><Image src="/logo/glo-shine-logo.svg" alt="Retour à l’accueil Glo Shine" width={170} height={51} unoptimized /></Link>
      <h1>Mentions légales</h1>
      <p>Page à compléter et à faire relire avant la mise en ligne.</p>

      <h2>Éditeur du site</h2>
      <ul>
        <li>Dénomination : {site.legal.denomination ?? missing}</li>
        <li>Forme juridique : {site.legal.form ?? missing}</li>
        <li>Adresse du siège : {site.legal.address ?? missing}</li>
        <li>Numéro d’entreprise (BCE) : {site.legal.bce ?? missing}</li>
        <li>Numéro de TVA : {site.legal.vat ?? missing}</li>
        <li>Email : {site.email ?? missing}</li>
        <li>Téléphone : {site.phone ?? missing}</li>
      </ul>

      <h2>Activité réglementée ou agrément</h2>
      <p>Agrément titres-services, s’il existe : {missing}</p>

      <h2>Assurance</h2>
      <p>{site.legal.insurance ?? missing}</p>

      <h2>Hébergement</h2>
      <p>{site.legal.host ?? missing}</p>

      <h2>Propriété intellectuelle</h2>
      <p>Les textes, le logo et les visuels de ce site appartiennent à leur titulaire et ne peuvent pas être réutilisés sans autorisation.</p>

      <h2>Données personnelles</h2>
      <p>Voir la <Link href="/confidentialite">politique de confidentialité</Link>.</p>
    </main>
  );
}
