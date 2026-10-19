/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tomariobumilestari.com',
          },
        ],
        destination: 'https://tomariobumilestari.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
