<template>
  <p>Введите слово:</p><br>
  <input v-model="message" placeholder="Вы ещё ничего не ввели..."/><br>
  <p v-if="message!=''">{{ revMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      revMessage: ""
    }
  },
  watch: {
    message() {
      this.revMessage = this.message.split('').reverse().join('')
    }
  }
}
</script>