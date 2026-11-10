import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { CallLink } from '@/components/PrimaryButton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { base } from '@/lib/base';

export function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        {/* Retour à l'accueil : défilement doux sur la page d'accueil, navigation depuis les autres pages. */}
        <a href={`${base}/#accueil`} className="logo-link">
          <Logo id="logo-entete" />
        </a>
        <nav className="nav" aria-label="Sections">
          <a href={`${base}/#services`}>Services</a>
          <a href={`${base}/#airbnb`}>Airbnb</a>
          <a href={`${base}/#apropos`}>À propos</a>
          <a href={`${base}/#zones`}>Zones</a>
          <a href={`${base}/#faq`}>FAQ</a>
        </nav>
        <div className="header-actions">
          <CallLink />
          {/* Bascule de thème : tout à droite de l'en-tête. */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
