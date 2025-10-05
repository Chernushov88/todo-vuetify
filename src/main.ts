// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'; 
import App from './App.vue'
import vuetify from './plugins/vuetify'

// Шрифти
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

// Стилі
import './assets/main.scss'


const app = createApp(App);
const pinia = createPinia(); 


app.use(pinia);
app.use(vuetify);
app.mount('#app');