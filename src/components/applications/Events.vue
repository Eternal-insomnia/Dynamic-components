<template>
  <div class="events-application">
    <div class="header">
      <p>{{ localeComponent.title }}</p>
    </div>
    <div class="events-application-event">
      <p>{{ localeComponent.yourNum }}</p>
      <p>{{ number }}</p>
      <div class="count-buttons">
        <button @click="increment()">+</button>
        <button @click="number--">-</button>
      </div>
      <p class="reset" @click="number=0">{{ localeComponent.reset }}
        <span class="reset-stop"@click.stop="">{{ localeComponent.resetStop }}</span>
      </p>
    </div>

    <div class="events-application-event">
      <input @input="(event) => message = event.target.value" :placeholder="localeComponent.textPlaceholder">
      <p v-if="message==''">{{ localeComponent.ifMessage }}</p>
      <p v-else>{{ message }}</p>
    </div>

    <div class="events-application-event">
      <select @change="selected">
        <option value="" selected disabled>{{ localeComponent.select }}</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <p>{{ localeComponent.choice + ' ' + choice }}</p>
    </div>

    <div class="events-application-event">
      <p :class="keyDownClass">{{ localeComponent.enterEvent }}</p>
      <input @keydown.enter="enterKeyDown">
    </div>

    <div class="events-application-event">
      <p>{{ localeComponent.copyEvent }}</p>
      <textarea @paste="onPaste"></textarea>
      <p>{{ pastedText }}</p>
    </div>

    <div class="events-application-event">
      <p :class="coolTextClass" @mouseover="coolTextChange" @mouseleave="coolTextChange">{{ coolText }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      choice: "",
      coolText: "Я красивый текст",
      coolTextClass: "mouseLeave",
      keyDownClass: "",
      message: "",
      number: 0,
      pastedText: ""
    }
  },
  methods: {
    coolTextChange() {
      if (this.coolTextClass == "mouseLeave") {
        this.coolTextClass = "mouseOver"
        this.coolText = this.localeComponent.coolTextHover
      } else {
        this.coolTextClass = "mouseLeave"
        this.coolText = this.localeComponent.coolTextCalm
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
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      this.choice = this.locale.application.events.noChoice
      this.message = this.locale.application.events.ifMessage
      return this.locale.application.events
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