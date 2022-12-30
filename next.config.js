/** @type {import('next').NextConfig} */
module.exports = () => ({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['1000logos.net', 'randomuser.me'],
  },
});
