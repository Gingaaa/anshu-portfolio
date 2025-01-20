import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
});

export default withMDX(nextConfig);
