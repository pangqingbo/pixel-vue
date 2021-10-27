import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Button',
        component: () => import('../views/Button.vue')
    },
    {
        path: '/pinput',
        name: 'Input',
        component: () => import('../views/Input.vue')
    },
    {
        path: '/pcheckbox',
        name: 'Checkbox',
        component: () => import('../views/Checkbox.vue')
    }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export { router, routes }