import Vue from 'vue'
import Vuex from 'vuex'
import {createPersistedState} from 'vuex-electron'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  state: {
    filters: [],
    rules: [],
    themes: [],
    styles: [],
  },
  getters: {
    getRules: state => {
      return state.rules
    },
    getFilters: state => {
      return state.filters
    },
    getThemes: state => {
      return state.themes
    },
    getStyles: state => {
      return state.styles
    },
  },
  mutations: {
    push(state, {table, item}) {
      state[table].push(item)
    },
    delete(state, {table, item}) {
      state[table]
        .splice(
          state[table].findIndex(row => row.id === item.id),
          1
        )
    },
    update(state, {table, item}) {
      let index = state[table].findIndex(row => row.id === item.id)
      Object.assign(state[table][index], item)
    }
  },
  plugins: [createPersistedState()]
})

export default store