'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Le seul bouton « Demander un devis » de la page : toujours à portée de pouce,
// il s'efface quand le formulaire, qui porte le sien, est à l'écran.
export function StickyCta() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById('devis');
    if (!form) {
      setHidden(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(form);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <a className="cta cta-sticky" href="/#devis" data-hidden={hidden} aria-hidden={hidden} tabIndex={hidden ? -1 : undefined}>
      Demander un devis
    </a>
  );
}
