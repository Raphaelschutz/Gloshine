import Image from 'next/image';
import Link from 'next/link';
import { Todo } from '@/components/Todo';
import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Image src="/logo/glo-shine-logo-inverse.svg" alt="Glo Shine" width={170} height={51} unoptimized />
        <dl className="footer-facts">
          <div><dt>Téléphone</dt><dd>{site.phone ?? <Todo>À FOURNIR</Todo>}</dd></div>
          <div><dt>Email</dt><dd>{site.email ?? <Todo>À FOURNIR</Todo>}</dd></div>
          <div><dt>Instagram</dt><dd>{site.instagram ?? <Todo>À FOURNIR</Todo>}</dd></div>
          <div><dt>N° d’entreprise</dt><dd>{site.legal.bce ?? <Todo>À FOURNIR</Todo>}</dd></div>
        </dl>
        <nav className="footer-links" aria-label="Informations légales">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
}
