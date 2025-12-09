const { defineConfig } = require("@rspack/cli");
const rspack = require("@rspack/core");

const isDev = process.env.NODE_ENV === "development";

/** @type {import('@rspack/core').RspackOptions} */
module.exports = defineConfig({
  entry: "./src/index.jsx", // можно оставить .js, но см. parser.jsx ниже
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    // важно: чтобы можно было импортировать .jsx/.js без явного расширения
    extensions: ["...", ".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      // CSS (чтобы import './index.css' работал)
     {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // JS/TS + JSX/TSX через встроенный swc
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  // если у тебя чистый JS/JSX — можно поставить syntax: "ecmascript"
                  syntax: "typescript",
                  tsx: true,
                  jsx: true, // ← это ключевая строчка для JSX
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: false, // или подключи @rspack/plugin-react-refresh
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({ template: "./public/index.html" }),
    new rspack.container.ModuleFederationPlugin({
      name: "shell",
      remotes: {
        mfe: "mfe@http://localhost:3001/remoteEntry.js",
      },
    shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: false }
    }
    }),
  ],
});
