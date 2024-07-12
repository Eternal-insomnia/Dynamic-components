<template>
  <div class="main-container">
    <div class="application">
      <component :is="currentTab" @response="onCreateUpdate"></component>
      <p v-if="currentTab === 'Created'">{{ childMsg }}</p>
    </div>
    <div class="settings">
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
      tabs: [
        "Computed", "Created", "CustomSelect", "Data", "Events", "JsonImport", "Methods", 
        "Mounted", "TodoList", "Vfor", "Vif", "Vmodel", "Vshow", "Watch"
      ]
    }
  },
  methods: {
    changeTab(event) {
      this.currentTab = event.target.value
    },
    onCreateUpdate(msg) {
      console.log("test-log", msg);
      this.childMsg = msg
    }
  }
}
</script>

<style>
.main-container {
  height: 50%;
  width: 50%;
  display: flex;
}
.application {
  width: 50%;
  overflow: hidden;
  background-color: greenyellow;
}
.settings {
  width: 50%;
  overflow: hidden;
  background-color: lightseagreen;
}
</style>