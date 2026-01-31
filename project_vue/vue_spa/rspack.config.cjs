const path = require("path");
const { defineConfig } = require("@rspack/cli");
const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack");

const isProd = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  entry: { main: "./src/main.js" },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "http://localhost:4174/", 
    uniqueName: "vue_host",
    clean: true
  },

  devServer: {
    port: 4174,
    historyApiFallback: true
  },

  devtool: isProd ? false : "cheap-module-source-map",

  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: { "@": path.resolve(__dirname, "src") }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: { syntax: "ecmascript" }
          }
        }
      },
      { test: /\.css$/, type: "css" },
      { test: /\.(png|jpg|jpeg|gif|svg)$/i, type: "asset/resource" }
    ]
  },

  experiments: { css: true },

  plugins: [
    new VueLoaderPlugin(),
    new rspack.HtmlRspackPlugin({ template: "./index.html" }),

    new ModuleFederationPlugin({
      name: "vue_host",
      remotes: {
        vue_mfe: "vue_mfe@http://localhost:4175/remoteEntry.js"
      },
      shared: {
        vue: { singleton: true, requiredVersion: false },
        "vue-router": { singleton: true, requiredVersion: false }
      }
    }),

    new rspack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
    })
  ],

  mode: isProd ? "production" : "development"
});
