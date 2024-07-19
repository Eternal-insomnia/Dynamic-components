<template>
  <div class="mounted-application">
    <p>{{ localeComponent.title }}</p>
    <p ref="pElementRef">{{ localeComponent.mountUncorrect }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  mounted() {
    this.$refs.pElementRef.textContent = this.localeComponent.mountCorrect
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.mounted
    }
  }
}
</script>

<style>
.mounted-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>