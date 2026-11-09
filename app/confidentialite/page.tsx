import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Todo } from '@/components/Todo';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Confidentialité | Glo Shine' };

const missing = <Todo>À FOURNIR</Todo>;

export default function Confidentialite() {
  return (
    <main className="legal">
      <Link href="/"><Image src="/logo/glo-shine-logo.svg" alt="Retour à l’accueil Glo Shine" width={170} height={51} unoptimized /></Link>
      <h1>Politique de confidentialité</h1>
      <p>Page à compléter et à faire relire avant la mise en ligne.</p>

      <h2>Qui est responsable de vos données</h2>
      <p>{site.legal.denomination ?? missing}, {site.legal.address ?? missing}. Contact : {site.email ?? missing}.</p>

      <h2>Quelles données et pourquoi</h2>
      <p>Le formulaire de devis recueille votre nom, votre email, votre téléphone si vous le donnez, votre ville, la prestation souhaitée et votre message. Ces données servent uniquement à répondre à votre demande et à préparer votre devis. Elles ne servent pas à de la publicité.</p>

      <h2>Sur quelle base</h2>
      <p>Votre consentement, donné en cochant la case du formulaire. Vous pouvez le retirer à tout moment en écrivant à l’adresse ci-dessus.</p>

      <h2>Combien de temps</h2>
      <p>{site.legal.retention ?? missing}</p>

      <h2>Qui y a accès</h2>
      <p>Glo Shine et ses prestataires techniques (hébergement du site, réception des demandes) : {site.legal.host ?? missing}. Vos données ne sont pas vendues.</p>

      <h2>Vos droits</h2>
      <p>Vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la limitation de leur traitement ou leur portabilité. En cas de désaccord, vous pouvez introduire une plainte auprès de l’Autorité de protection des données (autoriteprotectiondonnees.be).</p>

      <h2>Cookies</h2>
      <p>Ce site n’utilise ni cookie publicitaire, ni outil de mesure d’audience. Si cela change, cette page sera mise à jour et votre accord sera demandé.</p>
    </main>
  );
}
