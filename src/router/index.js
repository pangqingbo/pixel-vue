import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'button',
        component: () => import('../views/Button.vue')
    }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export { router, routes }