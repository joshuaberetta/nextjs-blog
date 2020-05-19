require("dotenv").config();
const withImages = require("next-images");

const isProd = process.env.NODE_ENV === "production";

// module.exports = withImages({
//   assetPrefix: isProd ? "https://d281hw6jrax8rk.cloudfront.net" : "/images",
//   webpack(config, options) {
//     return config;
//   },
// });

module.exports = {
  //   // Use the CDN in production and localhost for development.
  //   env: {
  //     BACKEND_URL: isProd ? "https://d281hw6jrax8rk.cloudfront.net" : "/images",
  //   },
};
