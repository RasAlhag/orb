import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Rules from '../components/Rules'
import store from './store'


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
  ]
})

router.beforeEach(async (to, from, next) => {
  await store.restored
  next()
})

export default router