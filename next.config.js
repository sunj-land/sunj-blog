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
};

module.exports = withMDX(nextConfig);
