<template>
  <div id="app">

    <h3>Todos</h3>
    <h5>Completed: {{ computedTodos }}</h5>
    <h5>Pending: {{ pendingTodos }}</h5>
    <todos-list />
    <todo-form />
  </div>
</template>

<script>
import TodosList from './components/TodosList'
import TodoForm from "@/components/TodoForm";

export default {
  name: 'App',
  components: {
    TodosList,
    TodoForm
  },

  computed: {
    computedTodos() {
      return this.$store.getters.completedTodos
    },
    pendingTodos() {
      return this.$store.getters.pendingTodos
    }

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
