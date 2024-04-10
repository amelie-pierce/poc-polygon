const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => {
  const entry = ["./echarts.min.js"];

  switch (argv.mode) {
    case "development":
    default:
      entry.push("./src/option.js");
      break;
    case "production":
      entry.push("./index.js");
      break;
  }

  return {
    entry: entry,
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      library: {
        name: "polygon",
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
      argv.mode === "production" &&
        new HtmlWebpackPlugin({
          template: "./index.html",
        }),
    ],
  };
};
