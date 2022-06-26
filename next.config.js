/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  env: {
    PUBLIC_URL: "https://your-organization-or-username.github.io/my-nextjs-app",
    assetPrefix: "./",
  },
};

module.exports = nextConfig;
