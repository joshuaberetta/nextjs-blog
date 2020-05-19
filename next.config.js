const dotEnvResult = require("dotenv").config();

const prod = process.env.NODE_ENV === "production";

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = {
  env: {
    TEST: process.env.TEST,
    BACKEND_URL: prod ? "https://d281hw6jrax8rk.cloudfront.net" : "/",
  },
};
