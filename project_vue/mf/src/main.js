const { createApp } = require("vue");
const Root = require("./Root.vue").default;

if (!window.__MF_HOST__) {
  createApp(Root).mount("#app");
}
