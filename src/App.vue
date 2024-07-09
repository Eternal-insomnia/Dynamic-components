<script>
import Computed from "./components/Computed.vue"
import Created from "./components/Created.vue"
import Data from "./components/Data.vue"
import Events from "./components/Events.vue" 
import Methods from "./components/Methods.vue"
import Mounted from "./components/Mounted.vue"
import Vfor from "./components/V-for.vue"
import Vif from "./components/V-if.vue"
import Vmodel from "./components/V-model.vue"
import Vshow from "./components/V-show.vue"
import Watch from "./components/Watch.vue"

export default {
  components: {
    Computed,
    Created,
    Data,
    Events,
    Methods,
    Mounted,
    Vfor,
    Vif,
    Vmodel,
    Vshow,
    Watch
  },
  data() {
    return {
      childMsg: ''
    }
  }
}
</script>

<template>
  <p>Добрый день!</p><br>
  <!-- <Computed/> -->
  <!-- <Created @response="(msg) => childMsg = msg"/>
  <p>{{ childMsg }}</p> -->
  <!-- <Data/> -->
  <Events/>
  <!-- <Methods/> -->
  <!-- <Mounted/> -->
  <!-- <Vfor/> -->
  <!-- <Vif/> -->
  <!-- <Vmodel/> -->
  <!-- <Vshow/> -->
  <!-- <Watch/> -->
</template>
