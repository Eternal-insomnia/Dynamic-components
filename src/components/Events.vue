<script>
export default {
  data() {
    return {
      number: 0
    }
  },
  methods: {
    increment() {
      this.number++
    }
  }
}
</script>

<template>
  <p>Ваше число:</p>
  <p>{{ number }}</p>
  <button @click="increment()">Увеличить</button>
  <button @click="number--">Уменьшить</button>
</template>