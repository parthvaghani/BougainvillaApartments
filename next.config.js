/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats:["image/webp","image/avif"],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
