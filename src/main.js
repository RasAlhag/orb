import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router'
import store from './plugins/store'
import modalBus from './plugins/modalBus'
import './styles/main.sass'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  modalBus,
  render: h => h(App)
}).$mount('#app')
