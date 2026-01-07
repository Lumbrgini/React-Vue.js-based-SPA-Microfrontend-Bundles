
/**  @type {import("@module-federation/enhanced/rspack").ModuleFederationPluginOptions} */
const moduleFederationConfig = {

  name: "vue_mfe",

  filename: "remoteEntry.js",
  
  exposes: {
    "./MF1": "./src/MF1.vue",
    "./MF2": "./src/MF2.vue",
  },

  shared: {
    vue: { singleton: true, eager: true, requiredVersion: false },
    "vue-router": { singleton: true, eager: true, requiredVersion: false },
  },

  dts: false,
};

module.exports = moduleFederationConfig;
