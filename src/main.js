import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import PinDirectors from './shared/pin-directive'
Vue.config.productionTip = false
Vue.directive('pin', PinDirectors)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
