/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:locale/:path',
        destination: '/en/:path*',
        permanent: true,
      },
    ];
  },
};

/**
 * withMDX Config next
 */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const mdxConfig = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});

/**
 * PWA Config next
 * @link https://www.npmjs.com/package/next-pwa
 */

const withPWA = require('next-pwa');
const pwaConfig = withPWA({
  pwa: {
    dest: 'public',
  },
});

module.exports = { ...nextConfig, ...pwaConfig, ...mdxConfig };
