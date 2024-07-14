module.exports = {
    future: {
      webpack5: true, // If using Next.js 11 or above
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false; // Required to avoid a webpack5 issue
      }
      return config;
    },
  };
  