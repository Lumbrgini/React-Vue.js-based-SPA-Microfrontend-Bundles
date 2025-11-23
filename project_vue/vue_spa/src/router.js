import { createWebHistory, createRouter } from 'vue-router'

import About from './About.vue';
import Contact from './Contact.vue';
import Home from './Home.vue';
import Photos from './Photos.vue';


const MF1 = () =>
  import("vue_mfe/MF1").then(m => m.default || m);

const MF2 = () =>
  import("vue_mfe/MF2").then(m => m.default || m);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/photos', component: Photos },
  { path: "/mf1", component: MF1 },
  { path: "/mf2", component: MF2 },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})