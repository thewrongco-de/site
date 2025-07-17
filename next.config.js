/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: '/', // Use absolute paths for assets
  basePath: '', // Ensure no base path is set for root domain
  images: {
    unoptimized: true, // Disable Image Optimization API as it's not needed for static exports
  },
  // Disable server-side rendering of font optimization
  experimental: {
    optimizeCss: true,
  },
  // Configure proper MIME types for static assets
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  // Handle font loading
  async headers() {
    return [
      {
        source: '/(.*).(woff|woff2|ttf|eot|svg|png|jpg|jpeg|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
