# Site Glo Shine Cleaning (glo-shine.be)

Next.js + GSAP (ScrollTrigger, SplitText, @gsap/react). Non publié et non indexable tant que `robots` reste dans `app/layout.tsx`.

## Lancer en local
```bash
npm install
npm run build && npm run start
```
Puis ouvrir http://localhost:3100

## Où modifier quoi
- Textes, téléphone, mentions légales : `content/site.ts`. Les valeurs entre crochets sont des emplacements à remplir.
- Couleurs des deux thèmes : variables en tête de `app/globals.css`, aucune couleur en dur ailleurs.
- Animations : `components/Scenes.tsx`, toutes dans `gsap.matchMedia()`, aucune en mode « moins d'animations ».
- Images d'illustration provisoires (Canva) : `public/ambiance/`. Pas d'avant/après : les clients ne veulent pas de photos de chez eux.

## Avant la mise en ligne
1. Remplir tous les emplacements entre crochets (`content/site.ts`, avis).
2. Relier le formulaire : `DEVIS_WEBHOOK_URL` (voir `.env.example`). Sans lui, le formulaire n'envoie rien et le dit.
3. Faire relire les mentions légales et la politique de confidentialité.
4. Retirer `robots` de `app/layout.tsx` (c'est la seule raison du score SEO de 63 en local).
