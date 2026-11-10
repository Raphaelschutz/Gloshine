'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Enveloppe animée de la page. Le contenu reste rendu côté serveur et lisible sans JavaScript.
// Règles : seulement transform et opacity, rien sur le bouton principal, rien d'épinglé,
// et aucune animation créée quand le visiteur demande moins de mouvement.
export function Scenes({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          ordinateur: '(min-width: 960px) and (prefers-reduced-motion: no-preference)',
          telephone: '(max-width: 959px) and (prefers-reduced-motion: no-preference)',
        },
        (ctx) => {
          const { ordinateur } = ctx.conditions as { ordinateur: boolean };

          // Titre de l'accueil : mot par mot, toujours visible (léger déplacement, jamais d'opacité 0).
          // Avec l'intro, il attend qu'elle se retire pour démarrer.
          const intro = document.documentElement.dataset.intro === '1';
          SplitText.create('[data-split="titre"]', {
            type: 'words',
            wordsClass: 'word',
            onSplit: (self) => {
              const tween = gsap.from(self.words, { y: 20, duration: 0.5, stagger: 0.035, ease: 'power3.out', paused: intro });
              if (intro) document.addEventListener('intro:fin', () => tween.play(), { once: true });
              return tween;
            },
          });

          // L'étincelle du logo de l'en-tête scintille une fois (l'en-tête est hors de cette zone, d'où la recherche dans la page).
          const etincelle = document.querySelector('.header [data-anim="etincelle"]');
          if (etincelle) {
            gsap.timeline({ delay: intro ? 3.2 : 0.3 })
              .fromTo(etincelle, { scale: 0.5, rotation: -45 }, { scale: 1.25, rotation: 0, duration: 0.35, ease: 'power2.out', svgOrigin: '108 32' })
              .to(etincelle, { scale: 1, duration: 0.3, ease: 'power2.inOut', svgOrigin: '108 32' });
          }

          // Grand dégradé de fond : parallaxe lente sur toute la page.
          gsap.to('[data-anim="aurore"]', {
            yPercent: ordinateur ? 35 : 18,
            rotation: 18,
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1 },
          });

          // Titres et blocs de section : fondu et légère montée, une seule fois.
          // Opacité seulement (pas de visibility: hidden) : tout reste atteignable au clavier.
          gsap.utils.toArray<HTMLElement>('[data-anim="apparition"]').forEach((el) => {
            gsap.from(el, { y: ordinateur ? 40 : 20, opacity: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 97%', once: true } });
          });

          // Images sous la ligne de flottaison : légère montée, une seule fois.
          gsap.utils.toArray<HTMLElement>('[data-anim="photo"]').forEach((el) => {
            gsap.from(el, { y: ordinateur ? 60 : 24, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 97%', once: true } });
          });

          // Photos : l'image glisse légèrement dans son cadre au défilement (parallaxe, transform seulement).
          gsap.utils.toArray<HTMLElement>('[data-parallax] img').forEach((img) => {
            const amplitude = ordinateur ? 6 : 4;
            gsap.fromTo(img, { yPercent: -amplitude }, { yPercent: amplitude, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.4 } });
          });

          // Cartes en cascade.
          gsap.set('[data-anim="carte"]', { y: 30, opacity: 0 });
          ScrollTrigger.batch('[data-anim="carte"]', {
            start: 'top 97%',
            once: true,
            onEnter: (cards) => gsap.to(cards, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', overwrite: true }),
          });

          // Étapes : elles se révèlent une à une et la ligne en dégradé se dessine au défilement.
          gsap.fromTo(
            '[data-anim="ligne"]',
            ordinateur ? { scaleX: 0 } : { scaleY: 0 },
            { ...(ordinateur ? { scaleX: 1 } : { scaleY: 1 }), ease: 'none', scrollTrigger: { trigger: '[data-anim="etapes"]', start: 'top 75%', end: 'bottom 55%', scrub: 0.5 } },
          );
          gsap.utils.toArray<HTMLElement>('[data-anim="etape"]').forEach((step) => {
            gsap.from(step, { y: 24, opacity: 0, duration: 0.55, ease: 'power3.out', scrollTrigger: { trigger: step, start: 'top 97%', once: true } });
          });
        },
        root,
      );

      // Les polices changent la hauteur des titres : on recalcule les positions une fois chargées.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => mm.revert();
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
