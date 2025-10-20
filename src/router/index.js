import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const NotFound = () => import('@/components/NotFound.vue')

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { hideChrome: true } }
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})
