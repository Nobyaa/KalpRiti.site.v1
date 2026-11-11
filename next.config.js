/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  async rewrites() {
    return [
      {
        source: '/the-click-gap',
        destination: 'https://post-click-magnet.vercel.app/the-click-gap',
      },
      {
        source: '/the-click-gap/:path*',
        destination: 'https://post-click-magnet.vercel.app/the-click-gap/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
