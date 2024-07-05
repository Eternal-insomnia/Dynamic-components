<script>
export default {
  data() {
    return {
      msg: true
    }
  },
  methods: {
    toggle() {
        this.msg = !this.msg
    }
  }
}
</script>

<template>
  <p>V-show здесь!</p><br>
  <p v-show="msg">Удали меня!</p><br>
  <button v-if="msg" @click="toggle">Удалить</button>
  <button v-else @click="toggle">Вернуть</button>
</template>