<template>
  <div class="data-application">
    <p>{{ localeComponent.title }}</p>
    <p class="quote">{{ message }}</p>
  </div>
  
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      message: 's'
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      this.message = this.locale.application.data.msg
      return this.locale.application.data
    }
  }
}
</script>

<style>
.data-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  overflow-y: auto; 
}
.quote {
  text-align: center;
}
</style>