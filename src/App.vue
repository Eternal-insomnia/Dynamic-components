<template>
  <div class="application-container">
    <HomeComponent/>
    <!-- <TestComponent/> -->
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue"
import TestComponent from "./test/TestComponent.vue";

export default {
  components: {
    HomeComponent,
    TestComponent
  }
}
</script>

<style>
html,
body,
#app,
.application-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>