const { createApp } = require("vue");

const MF1 = require("./MF1.vue").default;
const MF2 = require("./MF2.vue").default;

const r1 = document.getElementById("root1");
const r2 = document.getElementById("root2");

if (r1) createApp(MF1).mount(r1);
if (r2) createApp(MF2).mount(r2);
