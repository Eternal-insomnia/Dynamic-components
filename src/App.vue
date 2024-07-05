<script>
import Computed from "./components/Computed.vue"
import Created from "./components/Created.vue"
import Data from "./components/Data.vue"
import Mounted from "./components/Mounted.vue"
import Vfor from "./components/V-for.vue"
import Vif from "./components/V-if.vue"
import Vshow from "./components/V-show.vue"

export default {
  components: {
    Computed,
    Created,
    Data,
    Mounted,
    Vfor,
    Vif,
    Vshow
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
  <!-- <Vfor/> -->
  <!-- <Vif/> -->
  <!-- <Vshow/> -->
  <Mounted/>
</template>
