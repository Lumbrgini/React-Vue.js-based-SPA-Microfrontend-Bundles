import { createWebHistory, createRouter } from 'vue-router'

const About = () => import('./pages/About.vue')
const Photos = () => import('./pages/Photos.vue')
const Contact = () => import('./pages/Contact.vue')


const MF1 = () =>
import("vue_mfe/MF1").then(m => m.default || m);

const MF2 = () =>
import("vue_mfe/MF2").then(m => m.default || m);

const routes = [
    { path: '/', component: About },
    { path: '/contact', component: Contact },
    { path: '/photos', component: Photos },
    { path: "/mf1", component: MF1 },
    { path: "/mf2", component: MF2 },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})