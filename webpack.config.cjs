const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./echarts.min.js", "./index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    globalObject: "this",
    library: {
      name: "pocPolygon",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "css", to: "css" }, // Copies the 'css' directory to the output directory
    //     { from: "documentation", to: "documentation" }, // Copies the 'documentation' directory to the output directory
    //     { from: "images", to: "images" }, // Copies the 'images' directory to the output directory
    //     { from: "js", to: "js" }, // Copies the 'js' directory to the output directory
    //     { from: "php", to: "php" }, // Copies the 'php' directory to the output directory
    //     { from: "webfonts", to: "webfonts" }, // Copies the 'webfonts' directory to the output directory
    //   ],
    // }),
  ],
};
