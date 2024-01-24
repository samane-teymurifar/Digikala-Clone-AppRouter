/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "dkstatics-public.digikala.com/**",
        },
        {
          protocol: "https",
          hostname: "https://www.digikala.com/**",
        }
      ],
    },
  };
  
  module.exports = nextConfig;