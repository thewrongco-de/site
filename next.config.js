/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enable styled-components for better component styling
    styledComponents: true,
  },
  images: {
    // Configure any image domains you need
    domains: [],
  },
  // Enable webpack 5
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
