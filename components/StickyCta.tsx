'use client';

import { useEffect, useState } from 'react';
import { Spark } from '@/components/PrimaryButton';
import { site } from '@/content/site';

// Un seul bouton plein par écran : celui-ci n'apparaît que lorsque le bouton de l'accueil
// a quitté l'écran, et s'efface quand le formulaire, qui porte le sien, est visible.
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('cta-accueil');
    const form = document.getElementById('visite');
    if (!hero || !form) return;
    const seen = new Map<Element, boolean>([[hero, true], [form, false]]);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => seen.set(entry.target, entry.isIntersecting));
      setVisible(!seen.get(hero) && !seen.get(form));
    }, { threshold: 0.05 });
    observer.observe(hero);
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <a className="btn sticky-cta" href="#visite" data-visible={visible} aria-hidden={!visible} tabIndex={visible ? undefined : -1}>
      {site.cta}
      <Spark />
    </a>
  );
}
