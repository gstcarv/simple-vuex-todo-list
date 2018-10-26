import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, { todoContent }){
      state.todos.push({
        content: todoContent,
        createdAt: new Date()
      })
    },
    deleteTodo(state, { index }){
      state.todos = state.todos.filter((todo, todoIndex) => todoIndex !== index)
    }
  },
  actions: {

  }
})
