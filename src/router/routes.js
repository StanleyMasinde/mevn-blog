/**
 * Load a view file
 */

const path = (view) => {
    return () => import(/* webpackChunkName: "js/pages/page" */ `../pages/${view}`)
}

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: require('../pages/Welcome.vue').default
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