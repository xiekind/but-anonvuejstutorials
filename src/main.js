import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VAnimateCss from 'v-animate-css'

// import router from './router'
Vue.use(BootstrapVue)
Vue.use(VAnimateCss)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  template: '<router-view></router-view>'
}).$mount('#app')
