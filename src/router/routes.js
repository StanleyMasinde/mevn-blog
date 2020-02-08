import Vue from 'vue'
/**
 * Load a view file
 */

const path = (view) => require(/* webpackChunkName: "js/pages/page" */ `../pages/${view}.vue`).default

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: Vue.component('welcome', require('../pages/Welcome.vue').default)
    },
    {
        path: "/login",
        name: "Login",
        component: path('auth/login')
    },
    {
        path: "*",
        name: "Not Found",
        component: path('errors/404')
    }
]

export default routes