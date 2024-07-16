<template>
  <div class="application-container">
    <HomeComponent/>
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue"

export default {
  components: {
    HomeComponent
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
button {
  border: solid;
  border-color: #65951e;
  border-radius: 1rem;
  background-color: #96dc2d;
}
.application-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>