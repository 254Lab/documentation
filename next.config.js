/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/documentation",
  assetPrefix: "/documentation",
};

module.exports = nextConfig;
