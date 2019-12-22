import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry'

import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router'
import store from './plugins/store'
import modalBus from './plugins/modalBus'

import Rule from './domain/Rule'
import Theme from './domain/Theme'

import './styles/main.sass'
import Filter from './domain/Filter'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)

new Vue({
  vuetify,
  router,
  store,
  modalBus,
  render: h => h(App),
  created() {
    this.$store.state.rules.forEach(rule => Rule.wakeUp(rule))
    this.$store.state.themes.forEach(theme => Theme.wakeUp(theme))
    this.$store.state.filters.forEach(theme => Filter.wakeUp(theme))
  }
}).$mount('#app')
