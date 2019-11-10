/**
 * Common middlewae that can be applied to routes
 */

let middlewares = {
    auth: (to, from, next) => {
        return next()
    },
    guest: (to, from, next) => {
        return next()
    }
}



export default middlewares = middlewares