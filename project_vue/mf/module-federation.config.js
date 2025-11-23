
/**  @type {import("@module-federation/enhanced/rspack").ModuleFederationPluginOptions} */
const moduleFederationConfig = {
  // Имя remote'а (то, что будешь использовать в host'e: "vue_mfe/...")
  name: "vue_mfe",

  // Файл манифеста, который будет раздавать этот remote
  filename: "remoteEntry.js",

  // Что именно экспоузим наружу
  exposes: {
    "./MF1": "./src/MF1.vue",
    "./MF2": "./src/MF2.vue",
  },

  shared: {
    vue: {
      singleton: true,
      eager: true,
      requiredVersion: false,
    },
  },

  dts: false,
};

module.exports = moduleFederationConfig;
