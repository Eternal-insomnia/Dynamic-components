<template>
  <p>Events здесь!</p><br>

  <!-- @CLICK -->
  <p>Ваше число:</p>
  <p>{{ number }}</p>
  <button @click="increment()">Увеличить</button>
  <button @click="number--">Уменьшить</button>
  <p @click="number=0">Сбросить
    <span @click.stop="">число</span>
  </p>

  <br><br>
  
  <!-- @INPUT -->
  <input @input="(event) => message = event.target.value" placeholder="Введите что-нибудь"><br>
  <p v-if="message==''">Тут пусто...</p>
  <p v-else>{{ message }}</p>
  
  <br><br>
  
  <!-- @CHANGE -->
  <select @change="selected">
    <option value="" selected disabled>Выберите</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select><br>
  <p>Ваш выбор: {{ choice }}</p>

  <br><br>

  <!-- @KEYDOWN -->
  <p :class="keyDownClass">Введите текст и нажмите Enter</p><br>
  <input @keydown.enter="enterKeyDown">
  
  <br><br>

  <!-- @PASTE -->
  <p>Вы можете вставить сюда текст из буфера обмена:</p><br>
  <textarea @paste="onPaste"></textarea><br>
  <p>{{ pastedText }}</p>

  <br><br>

  <!-- @MOUSEOVER and @MOUSELEAVE-->
  <p :class="coolTextClass" @mouseover="coolTextChange" @mouseleave="coolTextChange">{{ coolText }}</p>
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
.keyDown {
  color: #006700;
  background: #adff2f;
}

.mouseOver {
  color: #ff0000;
  background: #651b1b;
}
.mouseLeave {
  color: #00aeff;
  background: #004167;
}
</style>