import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Rules from '../components/Rules'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'rules',
      path: '/rules',
      component: Rules
    },
  ]
})
