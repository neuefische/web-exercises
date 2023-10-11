/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "dummyimage.com"],
  },
};

module.exports = nextConfig;
