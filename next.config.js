/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "dkstatics-public.digikala.com/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;