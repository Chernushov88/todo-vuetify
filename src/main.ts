// main.js
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Pinia
import { createPinia } from 'pinia'; 

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
})
const pinia = createPinia(); 


app.use(vuetify).use(pinia).mount('#app');