<template>
  <input v-model="message" placeholder="Введите что-нибудь"><br>
  <p>Ваше "что-нибудь":</p><br>
  <p>{{ message }}</p>
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