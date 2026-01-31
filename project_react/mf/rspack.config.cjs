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
    publicPath: "http://localhost:3001/",
    uniqueName: "mfe",
    clean: true
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  },

  devtool: isProd ? false : "cheap-module-source-map",

  resolve: {
    extensions: ["...", ".js", ".jsx", ".ts", ".tsx"]
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
              react: { runtime: "automatic", development: !isProd, refresh: false }
            }
          }
        }
      },
      { test: /\.css$/, type: "css" },
      { test: /\.(png|jpg|jpeg|gif|svg)$/i, type: "asset/resource" }
    ]
  },

  experiments: { css: true },

  plugins: [
    new rspack.HtmlRspackPlugin({ template: "./index.html" }),

    new ModuleFederationPlugin({
      name: "mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
        "./App2": "./src/App2.jsx"
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: false }
      },
      dts: false
    })
  ],

  mode: isProd ? "production" : "development"
});
