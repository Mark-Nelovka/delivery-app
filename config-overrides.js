const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {
    "@general": path.resolve(__dirname, "src/general"),
    "@styles": path.resolve(__dirname, "src/styles"),
    "@redux": path.resolve(__dirname, "src/redux"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@api": path.resolve(__dirname, "src/api"),
  };

  return config;
};
