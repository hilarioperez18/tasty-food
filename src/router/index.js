import { createRouter, createWebHistory } from 'vue-router'
import DetailsView from '../views/DetailsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: DetailsView
        },
        {
            path: '/recipes',
            name: 'recipes',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/DetailsView.vue')
        }
    ]
})

export default router
