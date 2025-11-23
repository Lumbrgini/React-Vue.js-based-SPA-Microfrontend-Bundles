module.exports = {
  name: "mfe",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.jsx",
    "./App2": "./src/App2.jsx",  
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};