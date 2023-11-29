import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.sass'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
