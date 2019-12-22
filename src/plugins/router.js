import Vue from 'vue'
import Router from 'vue-router'

// Route components
import Home from '../components/Home'
import Rules from '../components/Rules'
import Themes from '../components/Themes'
import Theme from '../components/Themes/Theme'
import Rule from "../components/Rules/Rule"
import Host from '../utility/Host'
import Filters from '../components/Filters'
import Filter from '../components/Filters/Filter'

//
import store from "./store"
import _ from 'lodash'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Host,
      props: {
        value: {name: 'Home'}
      },
      children: [
        {
          path: '',
          component: Home,
          name: 'home',
        },
        {
          path: '/Filters',
          component: Host,
          props: {
            value: {name: 'Filters'}
          },
          children: [
            {
              path: '',
              name: 'filters',
              component: Filters,
              props: () => ({
                rules: Vue.observable(_.cloneDeep(store.getters.getRules))
              })
            },
            {
              name: 'filter',
              path: ':id',
              component: Filter,
              props: (route) => ({
                value: Vue.observable(_.cloneDeep(store.state.filters.find(filter => filter.id === route.params.id)))
              }),
            },
          ],
        },
        {
          path: '/rules',
          component: Host,
          props: {
            value: {name: 'Rules'}
          },
          children: [
            {
              path: '',
              name: 'rules',
              component: Rules,
              props: () => ({
                rules: Vue.observable(_.cloneDeep(store.getters.getRules))
              })
            },
            {
              name: 'rule',
              path: ':id',
              component: Rule,
              props: (route) => ({
                value: Vue.observable(_.cloneDeep(store.state.rules.find(rule => rule.id === route.params.id)))
              }),
            },
          ]
        },
        {
          path: '/themes',
          component: Host,
          props: {
            value: {name: 'Themes'}
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
              props: (route) => ({
                value: Vue.observable(_.cloneDeep(store.state.themes.find(theme => theme.id === route.params.id))),
              }),
            }
          ]
        },
      ]
    },

  ]
})

export default router