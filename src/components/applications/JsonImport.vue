<template>
  <div class="json-import-application">
    <p>{{ localeComponent.title }}</p>
    <p>{{ localeComponent.msg }}</p>
    <ul>
      <li v-for="task in taskList">
        {{ task.id }}, {{ task.taskName }}, {{ task.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import tasks from "@/data/components_data/tasks.json"
import { mapState } from "vuex";

export default {
  data() {
    return {
      taskList: tasks
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.jsonImport
    }
  }
}
</script>

<style>
.json-import-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>