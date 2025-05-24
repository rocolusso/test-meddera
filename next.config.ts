import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  generateBuildId: async () => `${Date.now()}` // Forces new build ID on each deploy
  ,

};

export default nextConfig;
