<template>
  <div class="vshow-application">
    <p>V-show здесь!</p>
    <p v-show="msg">Удали меня!</p>
    <button v-if="msg" @click="toggle">Удалить</button>
    <button v-else @click="toggle">Вернуть</button>
  </div>
</template>

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

<style>
.vshow-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>