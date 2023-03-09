const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    timer: "./src/timer.js",
    DOM: "./src/DOMchanges.js",
    session: "./src/sessionScript.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
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
