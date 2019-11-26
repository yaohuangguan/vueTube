import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use({
  install (Vue) {
  Vue.prototype.$http = axios.create({
    baseURL: '/'
  })
}
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
