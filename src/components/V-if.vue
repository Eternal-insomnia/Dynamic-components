<script>
export default {
  data() {
    return {
      num: 0
    }
  }
}
</script>

<template>
  <p>V-if здесь!</p>
  <input type="number" v-model="num"><br>
  <p v-if="num > 5">Число больше пяти</p>
  <p v-else>Число меньше или равно пяти</p><br>
</template>