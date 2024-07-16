<template>
  <div class="vmodel-application">
    <p>V-model здесь!</p>
    <input v-model="message" placeholder="Введите что-нибудь">
    <p>Ваше "что-нибудь":</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    }
  }
}
</script>

<style>
.vmodel-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>