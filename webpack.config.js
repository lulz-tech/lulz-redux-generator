const path = require('path');

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env = "development") => ({
  mode: env,
  entry: "./src/index.ts",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  plugins: [new ForkTsCheckerWebpackPlugin({ async: env === "production" })]
});