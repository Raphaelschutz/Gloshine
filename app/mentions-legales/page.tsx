import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Mentions légales | Glo Shine Cleaning' };

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="legal">
        <h1>Mentions légales</h1>
        <p>Page à compléter avec les informations fournies par Glody, puis à faire relire avant la mise en ligne.</p>

        <h2>Éditeur du site</h2>
        <ul>
          <li>Dénomination : {site.legal.denomination}</li>
          <li>Forme juridique : {site.legal.form}</li>
          <li>Adresse du siège : {site.legal.address}</li>
          <li>Numéro d’entreprise (BCE) : {site.legal.bce}</li>
          <li>Numéro de TVA : {site.legal.vat}</li>
          <li>Téléphone : <a href={site.phone.href}>{site.phone.label}</a></li>
          <li>Email : {site.email}</li>
        </ul>

        <h2>Assurance</h2>
        <p>{site.legal.insurance}</p>

        <h2>Hébergement</h2>
        <p>{site.legal.host}</p>

        <h2>Propriété intellectuelle</h2>
        <p>Les textes, le logo et les visuels de ce site appartiennent à leur titulaire et ne peuvent pas être réutilisés sans autorisation.</p>
      </main>
      <Footer />
    </>
  );
}
