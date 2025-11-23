const { createApp } = require("vue");
const Root = require("./Root.vue").default;

const root = document.getElementById("app");

if (root) {
  createApp(Root).mount("#app");
}
