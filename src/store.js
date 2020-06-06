import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "todo item a",
        completed: false
      },
      {
        title: "todo item b",
        completed: false
      },
    ]
  },

  getters: {

  },

  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false
      })
    }
  },

  actions: {
    addNewTodo({commit}, todoItem) {
      commit('NEW_TODO', todoItem)
    }
  }
})