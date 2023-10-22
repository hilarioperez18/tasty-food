import { createRouter, createWebHistory } from 'vue-router'
import DetailsView from '../views/DetailsView.vue'
import HomeView from '../views/HomeView.vue'
import ResultsView from '../views/ResultsView.vue'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/recipes/:id',
            name: 'recipes',
            component: DetailsView
        },
        {
            path: '/results',
            name: 'results',
            component: ResultsView,
            props: true
        }
    ]
})

export default router
