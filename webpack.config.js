const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    activity: "./src/activityLogDisplay.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    usedExports: true,
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
