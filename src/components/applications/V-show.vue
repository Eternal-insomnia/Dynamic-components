<template>
  <div class="vshow-application">
    <p>{{ localeComponent.title }}</p>
    <p v-show="msg">{{ localeComponent.msg }}</p>
    <button v-if="msg" @click="toggle">{{ localeComponent.if }}</button>
    <button v-else @click="toggle">{{ localeComponent.else }}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      msg: true
    }
  },
  methods: {
    toggle() {
        this.msg = !this.msg
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.vshow
    }
  }
}
</script>

<style>
.vshow-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>