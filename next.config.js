/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  env: {
    PUBLIC_URL: "https://254Lab.github.io/documentation",
    assetPrefix: "./",
  },
  basePath: "/documentation",
  assetPrefix: "/documentation/",
};

module.exports = nextConfig;
