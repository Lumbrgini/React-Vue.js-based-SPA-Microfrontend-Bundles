const path = require("path");
const { defineConfig } = require("@rspack/cli");
const rspack = require("@rspack/core");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack");

const isProd = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  entry: { main: "./src/index.jsx" },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "http://localhost:3000/",
    uniqueName: "react_host",
    clean: true,
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  devtool: isProd ? false : "cheap-module-source-map",

  resolve: {
    extensions: ["...", ".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: { syntax: "ecmascript", jsx: true, tsx: true },
            transform: {
              react: { runtime: "automatic", development: !isProd, refresh: false },
            },
          },
        },
      },
      { test: /\.css$/, type: "css" },
      { test: /\.(png|jpg|jpeg|gif|svg)$/i, type: "asset/resource" }
    ],
  },

  experiments: { css: true },

  plugins: [
    new rspack.HtmlRspackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "react_host",
      remotes: { mfe: "mfe@http://localhost:3001/remoteEntry.js" },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: false }
      }
    })
  ],

  mode: isProd ? "production" : "development",
});
