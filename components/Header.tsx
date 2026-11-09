import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { CallLink } from '@/components/PrimaryButton';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link href="/">
          <Logo id="logo-entete" />
        </Link>
        <nav className="nav" aria-label="Sections">
          <a href="/#services">Services</a>
          <a href="/#airbnb">Airbnb</a>
          <a href="/#zones">Zones</a>
          <a href="/#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <CallLink />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
