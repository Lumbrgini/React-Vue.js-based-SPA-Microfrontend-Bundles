const { defineConfig } = require("@rspack/cli");
const rspack = require("@rspack/core");

const isDev = process.env.NODE_ENV === "development";

/** @type {import('@rspack/core').RspackOptions} */
module.exports = defineConfig({
  entry: "./src/index.jsx", 
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ["...", ".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
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
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "ecmascript",
                  tsx: true,
                  jsx: true, 
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: false, 
                  },
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",  
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
