//main.js

// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'; // Importez votre fichier de configuration du routeur


createApp(App)
  .use(router) // Utilisez le routeur
  .mount('#app');