const withImages = require("next-images");

module.exports = withImages({
  devIndicators: {
    distDir: "build",
    autoPrerender: false,
  },
});
