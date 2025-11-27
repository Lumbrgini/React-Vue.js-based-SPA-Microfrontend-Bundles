const { defineConfig } = require("@rspack/cli");
const rspack = require("@rspack/core");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack"); // если используешь enhanced

const isDev = process.env.NODE_ENV === "development";
const RefreshPlugin = require("@rspack/plugin-react-refresh");

module.exports = defineConfig({
  entry: "./src/bootstrap.jsx",                 // ⬅️ bootstrap.jsx, не index.js
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      historyApiFallback: true
    },
  },
  output: { publicPath: "http://localhost:3001/", uniqueName: "mfe" },

  resolve: {
    // ⬅️ ОБЯЗАТЕЛЬНО добавить ".jsx" (и можно .tsx, если надо)
    extensions: ["...", ".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ],
        type: "javascript/auto", // важно для style-loader
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,            // ⬅️ поддержка JSX/TS
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  // Разрешаем JSX и TSX в любых расширениях из test
                  syntax: "typescript",
                  tsx: true,
                  jsx: true,
                },
                transform: {
                  react: { runtime: "automatic", development: isDev, refresh: false },
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",  // или "asset" — см. ниже
      },
    ],
  },

  plugins: [
    new rspack.HtmlRspackPlugin({ template: "./index.html" }),
    new ModuleFederationPlugin({
      name: "mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
        "./App2": "./src/App2.jsx",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: false }
      },
      dts: false,
    }),
  ],
});

