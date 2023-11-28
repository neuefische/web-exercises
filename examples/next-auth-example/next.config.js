/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'dummyimage.com',
      'avatars.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
