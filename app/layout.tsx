import type { Metadata, Viewport } from 'next';
import { Figtree, Fraunces } from 'next/font/google';
import { StickyCta } from '@/components/StickyCta';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600'] });
const figtree = Figtree({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Glo Shine, nettoyage à domicile à Liège et Bruxelles',
  description: 'Ménage à domicile et préparation de logements Airbnb à Liège et Bruxelles. Pour vous, ou pour vos voyageurs.',
  // À retirer au moment de la mise en ligne, une fois le site complété.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: '#0F2A4A' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>
        {children}
        <StickyCta />
      </body>
    </html>
  );
}
