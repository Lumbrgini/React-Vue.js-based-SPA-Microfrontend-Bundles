const isDev = process.env.NODE_ENV === "development";

module.exports = {
  name: "mfe",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.jsx",
    "./App2": "./src/App2.jsx",  
  },
  shared: {
  react: { singleton: true, eager: isDev, requiredVersion: false },
  "react-dom": { singleton: true, eager: isDev, requiredVersion: false },
}
};