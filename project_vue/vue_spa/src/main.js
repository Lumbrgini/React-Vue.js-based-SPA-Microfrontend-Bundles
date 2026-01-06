import { createApp } from 'vue';
import App from './App.vue';
import i18n from '../i18n/index.js';
import { router } from './router.js';
import "./global-styles/index.css"

const app = createApp(App)
app.use(router)
app.use(i18n)  
app.mount('#root')

