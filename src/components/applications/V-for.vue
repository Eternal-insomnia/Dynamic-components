<template>
  <div class="vfor-application">
    <p>V-for здесь!</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {id: 1, name: "Task 1"},
          {id: 2, name: "Task 2"},
          {id: 3, name: "Task 3"},
          {id: 4, name: "Task 4"}
        ]
      }
    }
  }
</script>

<style>
.vfor-application {
  overflow-y: auto;
}
</style>