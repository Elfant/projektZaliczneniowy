const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.tsx",
  },

  output: {
    filename: "[name].[contenthash:5].js",
    path: path.resolve(__dirname, "build"),
    publicPath: ""
  },

  resolve: {
    extensions: [".ts", ".jsx", ".tsx", ".js"],
  },

  devtool: 'source-map',

  devServer: {
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "test",
      template: "index.html",
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:5].css",
    }),
  ],
};
