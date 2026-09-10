import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the Turbopack workspace root to this project so Next.js doesn't walk
  // up to the home directory looking for a lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
