import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/claude-runs-xood-commercial",
        destination: "/blog/how-i-run-multiple-businesses-with-claude",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
