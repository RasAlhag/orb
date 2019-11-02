import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Rules from '../components/Rules'
import Themes from '../components/Themes'
import Theme from "../components/Themes/Theme"
import RuleEditor from "../components/Rules/Rule"
import Host from "../components/Host"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Host,
      meta: {
        breadcrumb: 'Home',
        to: {
          name: 'home'
        },
      },
      children: [
        {
          path: '',
          component: Home,
          name: 'home',
        },
        {
          path: '/rules',
          component: Host,
          meta: {
            breadcrumb: 'Rules',
            to: {
              name: 'rules'
            },
          },
          children: [
            {
              path: '',
              name: 'rules',
              component: Rules,
            },
            {
              name: 'rule',
              path: ':id',
              component: RuleEditor,
              meta: {
                breadcrumb: (store, route) => {
                  return store.state.rules.find(rule => rule.id === route.params.id).name
                },
                to: {
                  name: 'rule'
                },
              },
            },
          ]
        },
        {
          path: '/themes',
          component: Host,
          meta: {
            breadcrumb: 'Themes',
            to: {
              name: 'themes'
            },
          },
          children: [
            {
              path: '',
              name: 'themes',
              component: Themes,
            },
            {
              name: 'theme',
              path: ':id',
              component: Theme,
              meta: {
                breadcrumb: (store, route) => {
                  return store.state.themes.find(rule => rule.id === route.params.id).name
                },
                to: {
                  name: 'theme'
                },
              },
            }
          ]
        },
      ]
    },

  ]
})

export default router