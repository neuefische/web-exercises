/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
