/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sunj-md.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  pageExtensions: ['tsx', 'ts', 'mdx', 'js', 'jsx'],
  experimental: {
    mdxRs: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withMDX(nextConfig);
