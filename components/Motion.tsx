'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Taille nécessaire pour que la fenêtre remplisse tout l'écran depuis son point d'ancrage.
function coverScale(el: Element) {
  const r = el.getBoundingClientRect();
  const ox = r.left + r.width / 2;
  const oy = r.top + r.height * 0.6;
  const x = Math.max(ox, innerWidth - ox) / (r.width / 2);
  const up = oy / (r.height * 0.4);
  const down = (innerHeight - oy) / (r.height * 0.4);
  return Math.max(x, up, down) * 1.25;
}

export function Motion() {
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // React ne pose pas l'attribut muted au rendu serveur : sans cela, les mobiles bloquent la lecture.
    document.querySelectorAll('video').forEach((video) => {
      video.muted = true;
      if (reduced) video.pause();
      else video.play().catch(() => {});
    });

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-line', { yPercent: 110, duration: 0.9, stagger: 0.08, ease: 'power3.out' });
      gsap.from('.hero-sub', { autoAlpha: 0, y: 14, duration: 0.7, delay: 0.45, ease: 'power2.out' });
      gsap.from('.hero-window', { y: 50, autoAlpha: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
      // La raclette descend et nettoie la vitre : la zone claire suit exactement la lame.
      gsap.from('.hero-squeegee', { y: -58, duration: 1.6, delay: 0.5, ease: 'power1.inOut' });
      gsap.from('.hero-clean', { scaleY: 0, transformOrigin: '50% 0%', duration: 1.6, delay: 0.5, ease: 'power1.inOut' });

      // Au défilement, on entre par la fenêtre propre et le site passe au clair.
      gsap
        .timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=110%', scrub: 0.5, pin: true, invalidateOnRefresh: true } })
        .to('.hero-copy, .hero-top', { autoAlpha: 0, y: -30, duration: 0.3 }, 0)
        .to('.hero-squeegee', { autoAlpha: 0, duration: 0.2 }, 0)
        .to('.hero-window', { scale: () => coverScale(document.querySelector('.hero-window')!), transformOrigin: '50% 60%', ease: 'power2.in', duration: 1 }, 0)
        .to('.hero-glass', { fill: '#F7FAFD', duration: 0.45, ease: 'none' }, 0.55);

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, { y: 26, autoAlpha: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });

      ScrollTrigger.batch('[data-card]', {
        start: 'top 88%',
        once: true,
        onEnter: (cards) => gsap.from(cards, { y: 34, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }),
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax] img').forEach((img) => {
        gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.4 } });
      });
    });
    return () => mm.revert();
  }, []);

  return null;
}
