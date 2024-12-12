import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

app.use(router)
app.mount('#app')
