// rspack.config.cjs
const path = require("path");
const { defineConfig } = require("@rspack/cli");
const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack");
const moduleFederationConfig = require("./module-federation.config.js");

const isProd = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  entry: {
    main: "./src/main.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "http://localhost:4175/", 
    uniqueName: "vue_mfe",
    clean: true,
  },

  devServer: {
    port: 4175,
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.js$/,
        loader: "builtin:swc-loader",
        exclude: /node_modules/,
        options: {
          jsc: {
            parser: {
              syntax: "ecmascript",
            },
          },
           module: {
            type: "es6",
           },
        },
      },
      // CSS (если нужно)
      {
        test: /\.css$/,
        type: "css",
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin(moduleFederationConfig),
  ],

  experiments: {
    css: true,
  },

  mode: isProd ? "production" : "development",
});
