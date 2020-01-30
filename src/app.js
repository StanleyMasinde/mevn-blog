/***
*======================================================
*          Created by Stanley Masinde
*======================================================
*/
import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
// Bootstrap Vue
import {BootstrapVue} from 'bootstrap-vue'

Vue.use(BootstrapVue)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')