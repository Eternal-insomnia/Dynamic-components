<template>
  <p>Events здесь!</p><br>
  <p>Ваше число:</p>
  <p>{{ number }}</p>
  <button @click="increment()">Увеличить</button>
  <button @click="number--">Уменьшить</button>
  <p @click="number=0">Сбросить
    <span @click.stop="">число</span>
  </p>
  <br><br>
  <input @input="(event) => message = event.target.value" placeholder="Введите что-нибудь"><br>
  <p v-if="message==''">Тут пусто...</p>
  <p v-else>{{ message }}</p><br>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      message: "Тут пусто."
    }
  },
  methods: {
    increment() {
      this.number++
    }
  }
}
</script>