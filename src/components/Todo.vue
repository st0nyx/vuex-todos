<template>
  <div style="width: 250px; margin: 5px auto">
    <div style="display: flex; justify-content: space-between">

    {{ todo.title }}
    <button @click="deleteTodo">Delete</button>
    </div>

  </div>
</template>

<script>
export default {
  props: ["todo"],

  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todo)
    }
  }
}
</script>

<style>

</style>