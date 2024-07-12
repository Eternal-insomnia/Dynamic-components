<template>
  <p>Methods здесь!</p><br>
  <input v-model="message" placeholder="Введите что-нибудь"><br>
  <p>Ваше "что-нибудь":</p><br>
  <p v-if="message==''" style="color: #bbb;">Вы ничего не написали</p>
  <p v-else>{{ message }}</p><br>
  <button @click="reverseMsg">Перевернуть "что-нибудь"</button>
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