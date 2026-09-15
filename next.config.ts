import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',

  basePath: '/irshad-cinematic-portfolioo',
  assetPrefix: '/irshad-cinematic-portfolioo/',

  images: {
    unoptimized: true,
  },
}

export default nextConfig
