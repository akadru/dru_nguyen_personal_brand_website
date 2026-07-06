import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/claude-runs-xood-commercial",
        destination: "/blog/how-i-run-multiple-businesses-with-claude",
        permanent: true,
      },
      {
        // Newsletter retired 2026-07-06 — Dru does not run one.
        source: "/newsletter",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
