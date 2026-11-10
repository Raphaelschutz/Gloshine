'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { Logo } from '@/components/Logo';
import { slogan } from '@/content/site';

gsap.registerPlugin(useGSAP, SplitText);

// Intro de l'accueil : logo et slogan, environ 2 s, une fois par visite.
// Le script du <head> décide de l'afficher (pas en mode « moins d'animations », pas deux fois).
// Sans JavaScript elle ne s'affiche pas ; si le script plante, une animation CSS la retire seule.
export function Intro() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const html = document.documentElement;
      const el = root.current;
      if (!el || html.dataset.intro !== '1') return;
      el.classList.add('intro-js'); // GSAP prend la main, la sortie de secours CSS est coupée

      const finish = () => {
        delete html.dataset.intro;
        try {
          sessionStorage.setItem('intro-vue', '1');
        } catch {
          // Stockage indisponible : l'intro pourra revenir, sans autre conséquence.
        }
        document.dispatchEvent(new Event('intro:fin'));
      };

      const words = SplitText.create('.intro-slogan', { type: 'words' }).words;
      const tl = gsap.timeline({ onComplete: finish });
      tl.from('.intro-logo', { y: 18, opacity: 0, duration: 0.55, ease: 'power3.out' })
        .fromTo('[data-anim="etincelle"]', { scale: 0.4, rotation: -60 }, { scale: 1.3, rotation: 0, duration: 0.35, ease: 'power2.out', svgOrigin: '108 32' }, '-=0.15')
        .to('[data-anim="etincelle"]', { scale: 1, duration: 0.25, ease: 'power2.inOut', svgOrigin: '108 32' })
        .from(words, { y: 18, opacity: 0, duration: 0.45, stagger: 0.04, ease: 'power3.out' }, '-=0.45')
        .addLabel('sortie', '+=0.45')
        .to(el, { yPercent: -100, duration: 0.65, ease: 'power4.inOut' }, 'sortie');

      // Passer : un clic, la touche Échap ou le bouton « Entrer » lancent tout de suite la sortie.
      const skip = contextSafe!(() => {
        if (tl.time() < tl.labels.sortie) tl.play('sortie');
      });
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && skip();
      el.addEventListener('click', skip);
      document.addEventListener('keydown', onKey);
      return () => {
        el.removeEventListener('click', skip);
        document.removeEventListener('keydown', onKey);
      };
    },
    { scope: root },
  );

  return (
    <div ref={root} className="intro">
      <Logo id="logo-intro" className="intro-logo" />
      <p className="intro-slogan">{slogan}</p>
      <button type="button" className="intro-skip">Entrer</button>
    </div>
  );
}
