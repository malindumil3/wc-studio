import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.20.10.2'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
  },
};

export default nextConfig;
