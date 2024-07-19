<template>
  <div class="created-application">
    <p>{{ localeComponent.title }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      msg: "Created message"
    }
  },
  emits: ["response"],
  created() {
    this.$emit("response", this.msg)
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.created
    }
  }
}
</script>

<style>
.created-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>