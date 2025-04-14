import type { NextConfig } from "next";
import remarkGfm from 'remark-gfm'
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ['next-mdx-remote'],
  async headers() {
    return [
      {
        // Allow indexing for main pages
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index,follow",
          },
        ],
      },
      {
        // Prevent indexing for API routes
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex,nofollow",
          },
        ],
      },
    ];
  },
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrettyCode],
  },
});

export default withMDX(nextConfig);
