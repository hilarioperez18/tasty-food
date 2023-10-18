//import './assets/main.css'
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
