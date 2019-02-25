import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './router'
import { store } from './store'
Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.filter('snippet', function(value){
  return value.slice(0,10);
});

new Vue({
  router: Router,
  store,
  render: h => h(App),
}).$mount('#app')
