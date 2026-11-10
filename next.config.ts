import type { NextConfig } from 'next';

// GITHUB_PAGES=1 : export statique servi sur https://raphaelschutz.github.io/Gloshine/.
// Sans cette variable, le site tourne normalement (avec la route /api/devis).
const pages = process.env.GITHUB_PAGES === '1';
const basePath = pages ? '/Gloshine' : '';

const nextConfig: NextConfig = {
  ...(pages && { output: 'export', basePath, trailingSlash: true, images: { unoptimized: true } }),
  env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_STATIC: pages ? '1' : '' },
};

export default nextConfig;
