import Vue from 'vue'
import Vuex from 'vuex'
import persistance from './persistance'
import Rule from '../domain/Rule'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    filters: [],
    rules: [],
    themes: [],
  },
  getters: {
    getRules: state => {
      return state.rules
    }
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
  plugins: [persistance.plugin]
})

store.restored.then(() => {
  store.state.rules.forEach(rule => {
    if (rule instanceof Rule) {
      return
    }
    return Rule.wakeUp(rule)
  })
})

export default store