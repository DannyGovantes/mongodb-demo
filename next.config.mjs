/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "companieslogo.com",
      },
    ],
  },
};

export default nextConfig;
