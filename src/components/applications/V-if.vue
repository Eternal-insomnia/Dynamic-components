<template>
  <div class="vif-application">
    <p>V-if здесь!</p>
    <input type="number" v-model="num">
    <p v-if="num > 5">Число больше пяти</p>
    <p v-else>Число меньше или равно пяти</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
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