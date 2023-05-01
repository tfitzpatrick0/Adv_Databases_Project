import { merge } from "lodash";
const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  host: "http://localhost",
  port: 5000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "100d"
  }
};

let envConfig = {};

switch (env) {
  case "development":
    envConfig = require("./dev").config;
    break;
  case "testing":
    envConfig = require("./testing").config;
    break;
  default:
    envConfig = require("./dev").config;
}

export default merge(baseConfig, envConfig);
