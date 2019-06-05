import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import axios from 'axios'// 在这里还是会报 axios is not defined 错

import './server/dbs/config'

import './plugins/element'

import './assets/css/normalize.css'
import './assets/iconfont/iconfont.css'

Vue.prototype.$http = axios.create({
    timeout: 15000
}) // ?
Vue.prototype.bus = new Vue()

Vue.config.productionTip = false

new Vue({
    router,
    // store,
    axios,
    render: h => h(App)
}).$mount('#app')
