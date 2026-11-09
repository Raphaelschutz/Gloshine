import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Logo id="logo-pied" />
        <div className="footer-grid">
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={site.phone.href}>{site.phone.label}</a></li>
              <li className="muted">{site.email}</li>
              <li className="muted">{site.domain}</li>
            </ul>
          </div>
          <div>
            <h2>Entreprise</h2>
            <ul className="muted">
              <li>N° d’entreprise : {site.legal.bce}</li>
              <li>TVA : {site.legal.vat}</li>
              <li>{site.legal.address}</li>
            </ul>
          </div>
          <div>
            <h2>Informations</h2>
            <ul>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/confidentialite">Confidentialité</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
