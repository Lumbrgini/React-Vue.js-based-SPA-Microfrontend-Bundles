// vue-spa/rspack.config.cjs
const path = require("path");
const { defineConfig } = require("@rspack/cli");
const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack");

const isProd = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  entry: {
    main: "./src/main.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "http://localhost:4174/", // SPA-host
    uniqueName: "vue_host",
    clean: true,
  },

  devServer: {
    port: 4174,
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
        },
      },
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

    // ⬇️ Самое важное — подключаем remote vue_mfe
    new ModuleFederationPlugin({
      name: "vue_host",
      remotes: {
        vue_mfe: "vue_mfe@http://localhost:4175/remoteEntry.js",
      },
      shared: {
        vue: { singleton: true, eager: true, requiredVersion: false },
        "vue-router": { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  ],

  experiments: {
    css: true,
  },

  mode: isProd ? "production" : "development",
});
