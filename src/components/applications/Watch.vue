<template>
  <div class="watch-application">
    <p>{{ localeComponent.title }}</p>
    <p>{{ localeComponent.msg }}</p>
    <input v-model="message" :placeholder="localeComponent.placeholder"/>
    <p v-if="message!=''">{{ revMessage }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      message: "",
      revMessage: ""
    }
  },
  watch: {
    message() {
      this.revMessage = this.message.split('').reverse().join('')
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.watch
    }
  }
}
</script>

<style>
.watch-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>