// Préfixe des adresses quand le site est servi dans un sous-dossier (GitHub Pages : /Gloshine).
// Vide en local et sur un nom de domaine propre.
export const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Version statique (GitHub Pages) : pas de serveur, donc pas d'envoi du formulaire.
export const isStatic = process.env.NEXT_PUBLIC_STATIC === '1';
