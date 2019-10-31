import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Rules from '../components/Rules'
import Themes from '../components/Themes'
import Theme from "../components/Themes/Theme"
import RuleEditor from "../components/Rules/Rule"

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
      name: 'rule',
      path: '/rules/:id',
      component: RuleEditor
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