// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'; 
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';

// Fonts and icons
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

// Styles
import './assets/main.scss'

const app = createApp(App);
const pinia = createPinia(); 

app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount('#app');