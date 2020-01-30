/**
 * Instatiate vue router
 * ==
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
    routes: routes,
    mode: "history"
})
Vue.use(VueRouter)

export default router