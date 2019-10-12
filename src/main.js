import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import './styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import routes from './routes'
import modalBus from "./app/modalBus"

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(modalBus)

new Vue({
  vuetify: new Vuetify({theme: {dark: true}}),
  render: h => h(App),
  router: new VueRouter({
    mode: 'history',
    routes
  }),
}).$mount('#app')
