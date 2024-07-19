<template>
  <div class="vmodel-application">
    <p>{{ localeComponent.title }}</p>
    <input v-model="message" :placeholder="localeComponent.placeholder">
    <p>{{ localeComponent.msg }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      message: ""
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.vmodel
    }
  }
}
</script>

<style>
.vmodel-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>