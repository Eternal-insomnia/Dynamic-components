<template>
  <div class="methods-application">
    <p>{{ localeComponent.title }}</p>
    <input v-model="message" :placeholder="localeComponent.placeholder">
    <p>{{ localeComponent.msg }}</p>
    <p v-if="message==''">{{ localeComponent.ifMsg }}</p>
    <p v-else>{{ message }}</p>
    <button @click="reverseMsg">{{ localeComponent.reverseButton }}</button>
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
  methods: {
    reverseMsg() {
      this.message = this.message.split('').reverse().join('')
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.methods
    }
  }
}
</script>

<style>
.methods-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>