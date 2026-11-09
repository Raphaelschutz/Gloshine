import Image from 'next/image';
import { showAiNotice } from '@/content/site';

export function Ambiance({ src, alt, sizes, className = 'ambiance' }: { src: string | null; alt: string; sizes: string; className?: string }) {
  if (!src) return null;
  return (
    <figure className={className} data-parallax>
      <Image src={src} alt={alt} fill sizes={sizes} />
      {showAiNotice && <figcaption>Image d’ambiance générée par IA, pas une photo de nos prestations.</figcaption>}
    </figure>
  );
}
