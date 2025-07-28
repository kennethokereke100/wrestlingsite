import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/wrestlingsite',
    assetPrefix: '/wrestlingsite/',
  }),
};

export default nextConfig;
