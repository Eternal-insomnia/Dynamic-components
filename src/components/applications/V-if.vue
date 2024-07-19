<template>
  <div class="vif-application">
    <p>{{ localeComponent.title }}</p>
    <input type="number" v-model="num">
    <p v-if="num > 5">{{ localeComponent.if }}</p>
    <p v-else>{{ localeComponent.else }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      num: 0
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.vif
    }
  }
}
</script>

<style>
.vif-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>