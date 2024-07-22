<template>
  <div class="main-container" :class="fontSize + ' ' + fontFamily + ' ' + theme">
    <div class="start-application-page" :class="{ hide: !applicationHide }" @click="applicationHide = !applicationHide">
      <img src="@/assets/svg/application-icon.svg" height="128px" width="128px"/>
    </div>

    <div class="application" :class="{ hide: applicationHide }">
      <button class="go-back-app" @click="applicationHide = !applicationHide">
        <img src="@/assets/svg/go-back-icon.svg" height="20px" width="20px"/>
      </button>
      <component :is="currentTab" @response="onCreateUpdate"/>
      <p v-if="currentTab === 'Created'">{{ childMsg }}</p>
    </div>

    <div class="start-settings-page" :class="{ hide: !settingsHide }" @click="settingsHide = !settingsHide">
      <img src="@/assets/svg/settings-icon.svg" height="128px" width="128px"/>
    </div>

    <div class="settings" :class="{ hide: settingsHide }">
      <button class="go-back-set" @click="settingsHide = !settingsHide">
        <img src="@/assets/svg/go-back-icon.svg" height="20px" width="20px"/>
      </button>
      <div class="options">
        <select @change="changeTheme">
          <option value="green-theme">{{ localeComponent.theme.green }}</option>
          <option value="yellow-theme">{{ localeComponent.theme.yellow }}</option>
        </select>
        <select @change="changeFontSize">
          <option value="large-font-size">{{ localeComponent.fontSize.large }}</option>
          <option value="default-font-size" selected>{{ localeComponent.fontSize.default }}</option>
          <option value="small-font-size">{{ localeComponent.fontSize.small }}</option>
        </select>
        <select @change="changeFontFamily">
          <option class="times-font-family" value="times-font-family" selected>{{ localeComponent.fontFamily.times }}</option>
          <option class="courier-font-family" value="courier-font-family">{{ localeComponent.fontFamily.courier }}</option>
          <option class="lucida-font-family" value="lucida-font-family">{{ localeComponent.fontFamily.lucida }}</option>
        </select>
        <select @change="changeLang">
          <option value="RU">Русский</option>
          <option value="EN">English</option>
        </select>
        <select @change="changeTab">
          <option 
            v-for="(tab, i) in tabs" 
            :key="i"
            :value="tab"
          >
            {{ localeComponent.components[i] }}
          </option>
        </select>
      </div>
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

import { mapState, mapMutations } from 'vuex'

let i = 0;
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
      applicationHide: true,
      childMsg: "Ничего не получено от дочернего компонента",
      fontFamily: "times-font-family",
      fontSize: "default-font",
      settingsHide: true,
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
    changeTheme(event) {
      this.theme = event.target.value
    },
    onCreateUpdate(msg) {
      console.log("test-log", msg);
      this.childMsg = msg
    },
    ...mapMutations(['changeTab', 'changeLang'])
  },
  computed: {
    ...mapState(['currentTab', 'locale']),
    localeComponent() {
      return this.locale.settings
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
@media (max-width: 1050px) {
  .main-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .start-application-page {
    height: 50%;
  }
  .application {
    height: 50%;
  }
  .start-settings-page {
    height: 50%;
  }
  .settings {
    height: 50%;
  }
}
.start-application-page {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}
.start-application-page:hover img {
  animation-duration: 2s;
  animation-name: applicationPage;
  animation-iteration-count: infinite;
}
@keyframes applicationPage {
  from {
    height: 128px;
    width: 128px;
  }
  50% {
    height: 160px;
    width: 160px;
  }
  to {
    height: 128px;
    width: 128px;
  }
}
.application {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.start-settings-page {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}
.start-settings-page:hover img {
  animation-duration: 4s;
  animation-name: settingsPage;
  animation-iteration-count: infinite;
}
@keyframes settingsPage {
  from {
    rotate: 0;
  }
  to {
    rotate: 360deg;
  }
}
.settings {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
.options {
  height: 100%;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
.green-theme .application, .green-theme .start-application-page {
  background-color: #dfa;
}
.green-theme .settings, .green-theme .start-settings-page {
  background-color: #a3d4a6;
}
.yellow-theme button, .yellow-theme select {
  border-color: #b29f15;
  background-color: #fff30f;
}
.yellow-theme .application, .yellow-theme .start-application-page {
  background-color: #fffeaa;
}
.yellow-theme .settings, .yellow-theme .start-settings-page {
  background-color: #e8e9a5;
}
.go-back-app {
  position: relative;
  margin-top: 20px;
  margin-right: 80%;
}
.go-back-set {
  position: relative;
  margin-top: 20px;
  margin-right: 80%;
}
.hide {
  display: none;
}
</style>