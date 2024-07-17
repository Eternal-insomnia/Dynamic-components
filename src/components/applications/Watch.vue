<template>
  <div class="watch-application">
    <p>Watch здвесь!</p>
    <p>Введите слово:</p>
    <input v-model="message" placeholder="Вы ещё ничего не ввели..."/>
    <p v-if="message!=''">{{ revMessage }}</p>
  </div>
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

<style>
.watch-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>