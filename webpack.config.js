const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProdcution = env === "production";

  return {
    devtool: isProdcution ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    },
    entry: "./src/app.js",
    mode: "development",
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: "babel-loader",
          test: /\.js$/
        },
        {
          test: /\.s?css$/,
          use: [
            isProdcution ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProdcution ? "[name].[hash].css" : "[name].css",
        chunkFilename: isProdcution ? "[id].[hash].css" : "[id].css"
      })
    ]
  };
};
