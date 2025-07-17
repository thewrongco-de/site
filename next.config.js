/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Remove assetPrefix and basePath as they can cause issues with static exports
  images: {
    unoptimized: true,
  },
  // Disable experimental features that might cause issues
  experimental: {
    optimizeCss: false, // Disable as it's causing issues with static export
  },
  // Disable headers as they don't work with static export
  // and can cause issues with Vercel
  // Remove the entire headers() function
  // Remove webpack config if not needed
  // Add trailingSlash to ensure proper routing
  trailingSlash: true,
  // Add custom webpack config to handle static exports
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    if (!isServer) {
      // Set __dirname to false to prevent webpack from including Node.js polyfills
      // which can cause issues with static exports
      config.node = {
        __dirname: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
