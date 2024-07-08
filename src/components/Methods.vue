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

<template>
  <input v-model="message" placeholder="Введите что-нибудь"><br>
  <p>Ваше "что-нибудь":</p><br>
  <p>{{ message }}</p><br>
  <button @click="reverseMsg">Перевернуть "что-нибудь"</button>
</template>