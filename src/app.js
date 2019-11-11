import App from './App.vue'
import Vue from 'vue'
import router from './router/router'
import VueMeta from 'vue-meta'
import store from './vuex/store'
import VueProgressBar from 'vue-progressbar'

const options = {
    color: 'black',
    failedColor: '#874b4b',
    thickness: '4px',
    transition: {
        speed: '0.4s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}
Vue.use(VueProgressBar, options)
Vue.use(VueMeta)

import './bootstrap'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");