require("dotenv").config();

const isProd = process.env.NODE_ENV === "development";

module.exports = {
  // Use the CDN in production and localhost for development.
  env: {
    BACKEND_URL: isProd ? "https://d281hw6jrax8rk.cloudfront.net" : "/images",
  },
};
