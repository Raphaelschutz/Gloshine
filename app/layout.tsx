import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { site } from '@/content/site';
import './globals.css';

// Polices auto-hébergées : aucun appel à fonts.googleapis.com (RGPD).
const outfit = localFont({
  src: [
    { path: './fonts/outfit-latin-500-normal.woff2', weight: '500' },
    { path: './fonts/outfit-latin-600-normal.woff2', weight: '600' },
    { path: './fonts/outfit-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-display',
  display: 'swap',
});
const inter = localFont({
  src: [
    { path: './fonts/inter-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/inter-latin-600-normal.woff2', weight: '600' },
  ],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${site.name} : nettoyage à domicile et ménages Airbnb à Liège et Bruxelles`,
  description: 'On passe d’abord chez vous, puis on vous propose un devis adapté à votre logement. Demandez une visite gratuite.',
  // À retirer au moment de la mise en ligne, une fois le site complété.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#111418' },
  ],
};

// Appliqué avant le premier affichage : pas de flash de thème.
const themeScript = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
