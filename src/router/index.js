import { createRouter } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
  ]
})

export default router
