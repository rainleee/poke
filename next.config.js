/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
  webpack(config, options) {
    config.experiments.topLevelAwait = true;

    config.module.rules.push({
      exclude: /node_modules/,
      test: /\.graphql$/,
      use: [options.defaultLoaders.babel, { loader: "graphql-tag/loader" }],
    });

    return config;
  },
};

module.exports = nextConfig;
