/** 
 *This function is used to resolve your views in the views directory
 Only include the name of the view without the file extenstion
 */
import middleware from "./middleware";
const path = _view => {
    return () => import(/* webpackChunkName: "views/app-views" */`../views/${_view}.vue`)
};
/**
 * Register your routes here
 * Only use the component name without .vue
 */
let routes = [
    {
        path: "/",
        name: "landing",
        component: path("Landing"),
        beforeEnter: middleware.auth
    },
    {
        path: "/login",
        name: "Login",
        component: path("Login"),
        beforeEnter: middleware.guest
    },
    {
        path: "/register",
        name: "register",
        component: path('Register'),
        beforeEnter: middleware.guest
    },
    {
        path: "/posts/:post",
        name: "Blog Post",
        component: path('ViewPost')
    },
    /**
     * Has to be the last path
     */
    {
        path: "*",
        name: 'Not Found',
        component: path('404')
    }
];

export default routes;