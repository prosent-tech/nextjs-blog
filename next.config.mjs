/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "images.microcms-assets.io",
      "images.blog.microcms.io",
      "www.mimipo.jp",
      "mimipo.jp",
    ],
  },
};

export default nextConfig;
