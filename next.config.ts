import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignoriše greške tokom build-a
  },
  /* Ovde možeš dodati druge opcije */
};

export default nextConfig;
