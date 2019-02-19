import Vue from 'vue'
import VueFire from 'vuefire'
import './plugins/vuetify'
import VueResource from 'vue-resource'
import App from './App.vue'
import Router from './router'
import store from './store'

Vue.use(VueResource);
Vue.use(VueFire)

Vue.config.productionTip = false



new Vue({
  router: Router,
  store,
  render: h => h(App)
}).$mount('#app')
