<template>
  <div class="methods-application">
    <p>Methods здесь!</p>
    <input v-model="message" placeholder="Введите что-нибудь">
    <p>Ваше "что-нибудь":</p>
    <p v-if="message==''">Вы ничего не написали</p>
    <p v-else>{{ message }}</p>
    <button @click="reverseMsg">Перевернуть "что-нибудь"</button>
  </div>
</template>

<script>
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
}
</style>