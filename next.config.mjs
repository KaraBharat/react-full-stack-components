/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "www.bharatkara.com" }],
  },
};

export default nextConfig;
