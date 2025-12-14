/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.paypal.com',
      },
    ],
  },
};

export default nextConfig;
