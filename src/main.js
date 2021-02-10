import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/main.scss'
// process.env.WHETHER_API_KEY = '1bbf9e15ae12ac260807c1f51926467b'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
