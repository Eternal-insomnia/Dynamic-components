<template>
  <div class="main-container" :class="fontSize + ' ' + fontFamily + ' ' + theme">
    <div class="application">
      <component :is="currentTab" @response="onCreateUpdate"></component>
      <p v-if="currentTab === 'Created'">{{ childMsg }}</p>
    </div>
    <div class="settings">
      <select @change="changeTheme">
        <option value="green-theme">Зелёная тема</option>
        <option value="yellow-theme">Жёлтая тема</option>
      </select>
      <select @change="changeFontSize">
        <option value="large-font-size">Большой шрифт</option>
        <option value="default-font-size" selected>Стандартный шрифт</option>
        <option value="small-font-size">Маленький шрифт</option>
      </select>
      <select @change="changeFontFamily">
        <option class="times-font-family" value="times-font-family" selected>Times New Roman</option>
        <option class="courier-font-family" value="courier-font-family">Courier New</option>
        <option class="lucida-font-family" value="lucida-font-family">Lucida Sans</option>
      </select>
      <select @change="changeTab">
        <option 
          v-for="tab in tabs" 
          :key="tab"
          :value="tab"
        >
          {{ tab }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import Computed from "./applications/Computed.vue"
import Created from "./applications/Created.vue"
import CustomSelect from "./applications/CustomSelection.vue"
import Data from "./applications/Data.vue"
import Events from "./applications/Events.vue" 
import JsonImport from "./applications/JsonImport.vue"
import Methods from "./applications/Methods.vue"
import Mounted from "./applications/Mounted.vue"
import TodoList from "./applications/TodoList.vue"
import Vfor from "./applications/V-for.vue"
import Vif from "./applications/V-if.vue"
import Vmodel from "./applications/V-model.vue"
import Vshow from "./applications/V-show.vue"
import Watch from "./applications/Watch.vue"

export default {
  components: {
    Computed,
    Created,
    CustomSelect,
    Data,
    Events,
    JsonImport,
    Methods,
    Mounted,
    TodoList,
    Vfor,
    Vif,
    Vmodel,
    Vshow,
    Watch
  },
  data() {
    return {
      childMsg: "Ничего не получено от дочернего компонента",
      currentTab: "Computed",
      fontFamily: "times-font-family",
      fontSize: "default-font",
      tabs: [
        "Computed", "Created", "CustomSelect", "Data", "Events", "JsonImport", "Methods", 
        "Mounted", "TodoList", "Vfor", "Vif", "Vmodel", "Vshow", "Watch"
      ],
      theme: "green-theme"
    }
  },
  methods: {
    changeFontFamily(event) {
      this.fontFamily = event.target.value
    },
    changeFontSize(event) {
      this.fontSize = event.target.value
    },
    changeTab(event) {
      this.currentTab = event.target.value
    },
    changeTheme(event) {
      this.theme = event.target.value
    },
    onCreateUpdate(msg) {
      console.log("test-log", msg);
      this.childMsg = msg
    }
  }
}
</script>

<style>
button {
  border: solid;
  border-radius: 1rem;
  cursor: pointer;
}
select {
  cursor: pointer;
}
.main-container {
  height: 50%;
  width: 50%;
  display: flex;
}
.application {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.settings {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}
.large-font-size {
  font-size: large;
}
.default-font-size {
  font-size: medium;
}
.small-font-size {
  font-size: small;
}
.times-font-family {
  font-family: 'Times New Roman', Times, serif;
}
.courier-font-family {
  font-family: 'Courier New', Courier, monospace;
}
.lucida-font-family {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.green-theme button, .green-theme select {
  border-color: #65951e;
  background-color: #96dc2d;
}
.green-theme .application {
  background-color: #dfa;
}
.green-theme .settings {
  background-color: #a3d4a6;
}
.yellow-theme button, .yellow-theme select {
  border-color: #b29f15;
  background-color: #fff30f;
}
.yellow-theme .application {
  background-color: #fffeaa;
}
.yellow-theme .settings {
  background-color: #e8e9a5;
}
</style>