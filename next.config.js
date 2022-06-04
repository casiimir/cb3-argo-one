/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  optimizeFonts: true,
  images: {
    domains: ["img.icons8.com", "i.ibb.co", "images.musement.com"],
  },
};
