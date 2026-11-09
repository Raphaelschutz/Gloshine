import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Confidentialité | Glo Shine Cleaning' };

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main className="legal">
        <h1>Politique de confidentialité</h1>
        <p>Page à compléter avec les informations fournies par Glody, puis à faire relire avant la mise en ligne.</p>

        <h2>Qui est responsable de vos données</h2>
        <p>{site.legal.denomination}, {site.legal.address}. Contact : {site.email}, {site.phone.label}.</p>

        <h2>Quelles données et pourquoi</h2>
        <p>Le formulaire recueille votre nom, votre téléphone, votre email si vous le donnez, votre commune, le type de logement et votre message. Ces données servent uniquement à organiser la visite et à préparer votre devis. Elles ne servent pas à de la publicité.</p>

        <h2>Sur quelle base</h2>
        <p>Votre consentement, donné en cochant la case du formulaire. Vous pouvez le retirer à tout moment en nous contactant.</p>

        <h2>Combien de temps</h2>
        <p>{site.legal.retention}</p>

        <h2>Qui y a accès</h2>
        <p>Glo Shine Cleaning et ses prestataires techniques (hébergement du site, réception des demandes) : {site.legal.host}. Vos données ne sont pas vendues.</p>

        <h2>Vos droits</h2>
        <p>Vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la limitation de leur traitement ou leur portabilité. En cas de désaccord, vous pouvez introduire une plainte auprès de l’Autorité de protection des données (autoriteprotectiondonnees.be).</p>

        <h2>Cookies</h2>
        <p>Ce site n’utilise ni cookie publicitaire, ni outil de mesure d’audience. Il mémorise seulement votre choix de thème clair ou sombre dans votre navigateur.</p>
      </main>
      <Footer />
    </>
  );
}
