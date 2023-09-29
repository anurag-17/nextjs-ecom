/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
  images: {
      // domains: ["res.cloudinary.com"],
      domains: ['cdn.shopify.com'],
  },
};

module.exports = nextConfig;
