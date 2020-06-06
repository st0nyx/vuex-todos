<template>
  <div id="app">

    <h3>Todos</h3>
    <h5>Completed: {{ completedTodos }}</h5>
    <h5>Pending: {{ pendingTodos }}</h5>
    <todos-list />
    <todo-form />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodosList from './components/TodosList'
import TodoForm from "@/components/TodoForm";

export default {
  name: 'App',
  components: {
    TodosList,
    TodoForm
  },

  computed: {
    ...mapGetters({
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos'
    })

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
