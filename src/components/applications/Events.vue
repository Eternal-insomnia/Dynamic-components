<template>
  <div class="events-application">
    <div class="header">
      <p>Events здесь!</p>
    </div>
    <div class="events-application-event">
      <p>Ваше число:</p>
      <p>{{ number }}</p>
      <div class="count-buttons">
        <button @click="increment()">+</button>
        <button @click="number--">-</button>
      </div>
      <p class="reset" @click="number=0">Сбросить
        <span class="reset-stop"@click.stop="">число</span>
      </p>
    </div>

    <div class="events-application-event">
      <input @input="(event) => message = event.target.value" placeholder="Введите что-нибудь">
      <p v-if="message==''">Тут пусто...</p>
      <p v-else>{{ message }}</p>
    </div>

    <div class="events-application-event">
      <select @change="selected">
        <option value="" selected disabled>Выберите</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <p>Ваш выбор: {{ choice }}</p>
    </div>

    <div class="events-application-event">
      <p :class="keyDownClass">Введите текст и нажмите Enter</p>
      <input @keydown.enter="enterKeyDown">
    </div>

    <div class="events-application-event">
      <p>Вы можете скопировать сюда текст:</p>
      <textarea @paste="onPaste"></textarea>
      <p>{{ pastedText }}</p>
    </div>

    <div class="events-application-event">
      <p :class="coolTextClass" @mouseover="coolTextChange" @mouseleave="coolTextChange">{{ coolText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choice: "Вы ничего не выбрали.",
      coolText: "Я красивый текст",
      coolTextClass: "mouseLeave",
      keyDownClass: "",
      message: "Тут пусто.",
      number: 0,
      pastedText: ""
    }
  },
  methods: {
    coolTextChange() {
      if (this.coolTextClass == "mouseLeave") {
        this.coolTextClass = "mouseOver"
        this.coolText = "НЕЕЕЕЕЕЕТ, НЕ ТРОГАЙ"
      } else {
        this.coolTextClass = "mouseLeave"
        this.coolText = "Я красивый текст"
      }
    },
    enterKeyDown() {
      this.keyDownClass = "keyDown"
    },
    increment() {
      this.number++
    },
    onPaste(event) {
      this.pastedText = event.clipboardData.getData('text')
    },
    selected(event) {
      this.choice = event.target.value
    }
  }
}
</script>

<style scoped>
button {
  width: 30%;
}
.count-buttons {
  width: 75%;
  display: flex;
  justify-content: space-around;
}
.events-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; 
}
.events-application-event {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border: 1px, solid, #65951e;
}
.header {
  width: 100%;
  text-align: center;
  border-bottom: solid;
  border-color: #65951e;
  border-bottom-width: 1px;
}
.keyDown {
  color: #006700;
  background: #96dc2d;
}
.mouseOver {
  color: #ff0000;
  background: #651b1b;
}
.mouseLeave {
  color: #00aeff;
  background: #004167;
}
.reset {
  cursor: pointer;
}
.reset-stop {
  cursor: default;
}
</style>