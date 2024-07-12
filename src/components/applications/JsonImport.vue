<template>
  <div class="json-import-application">
    <p>JSON import здесь!</p>
    <p>Импортированный JSON-файл:</p>
    <ul>
      <li v-for="task in taskList">
        {{ task.id }}, {{ task.taskName }}, {{ task.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import tasks from "@/data/json/tasks.json"

export default {
  data() {
    return {
      taskList: tasks
    }
  }
}
</script>