<template>
  <div class="vfor-application">
    <p>{{ localeComponent.title }}</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.vfor
    }
  }
}
</script>

<style>
.vfor-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>