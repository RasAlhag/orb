import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Rules from '../components/Rules'
import Themes from '../components/Themes'
import Theme from "../components/Themes/Theme"

Vue.use(Router)

const router = new Router({
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
    {
      path: '/themes',
      name: 'themes',
      component: Themes,
    },
    {
      name: 'theme',
      path: '/themes/:id',
      component: Theme
    }
  ]
})

export default router