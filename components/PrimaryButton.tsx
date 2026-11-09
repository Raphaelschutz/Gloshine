import { site } from '@/content/site';

export function Spark() {
  return (
    <svg className="btn-spark" viewBox="-10 -10 20 20" aria-hidden="true">
      <path d="M0,-10 Q1.2,-1.2 10,0 Q1.2,1.2 0,10 Q-1.2,1.2 -10,0 Q-1.2,-1.2 0,-10 Z" />
    </svg>
  );
}

// Le bouton principal : un seul plein par écran, jamais animé à l'entrée.
export function PrimaryButton({ id, className = '' }: { id?: string; className?: string }) {
  return (
    <a id={id} className={`btn ${className}`.trim()} href="#visite">
      {site.cta}
      <Spark />
    </a>
  );
}

export function CallLink({ showLabel = true }: { showLabel?: boolean }) {
  return (
    <a className="link-call" href={site.phone.href} aria-label={`Appeler le ${site.phone.label}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </svg>
      {showLabel && <span>Appeler</span>}
    </a>
  );
}
