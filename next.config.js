/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "gateway.pinata.cloud",
      "gateway.pinata.cloud/ipfs",
      "localhost",
      "https://gateway.pinata.cloud/ipfs/",
    ], // <== Domain name
  },
};

module.exports = nextConfig;
