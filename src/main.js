import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './app/Home'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  vuetify: new Vuetify({theme: {dark: true}}),
  render: h => h(App),
  router: new VueRouter({
    mode: 'history',
    routes: [
      {
        name: null,
        path: '/',
        component: Home
      }
    ]
  }),
}).$mount('#app')
