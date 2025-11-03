import type { NextConfig } from "next";

const noCacheHeaders = [
  { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0' },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: '/favicon.ico', headers: noCacheHeaders },
      { source: '/brand-favicon.ico', headers: noCacheHeaders },
      { source: '/favicon-16x16.png', headers: noCacheHeaders },
      { source: '/favicon-32x32.png', headers: noCacheHeaders },
      { source: '/apple-touch-icon.png', headers: noCacheHeaders },
      { source: '/android-chrome-192x192.png', headers: noCacheHeaders },
      { source: '/android-chrome-512x512.png', headers: noCacheHeaders },
      { source: '/site.webmanifest', headers: noCacheHeaders },
    ];
  },
};

export default nextConfig;
