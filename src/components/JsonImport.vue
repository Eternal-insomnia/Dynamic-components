<template>
  <p>Импортированный JSON-файл:</p><br>
  <ul>
    <li v-for="task in taskList">
      {{ task.id }}, {{ task.taskName }}, {{ task.completed }}
    </li>
  </ul>
</template>

<script>
import tasks from "./json/tasks.json"

export default {
  data() {
    return {
      taskList: tasks
    }
  }
}
</script>