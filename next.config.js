/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ['chart.googleapis.com', 'cdn.coinranking.com']
  }
};

module.exports = nextConfig;
