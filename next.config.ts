import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This tells Next.js to produce a fully static HTML export
  output: 'export',

  // If your GitHub Pages site is at https://<username>.github.io/portfolio,
  // you typically need these two lines:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',

  // NOTE: If you’re deploying to https://<username>.github.io (no subpath),
  // then you do NOT use basePath or assetPrefix.
};

export default nextConfig;
