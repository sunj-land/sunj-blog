import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */

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
  compress: true,
};

export default withMDX(nextConfig);
