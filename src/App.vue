<script>
import Computed from "./components/Computed.vue"
import Created from "./components/Created.vue"
import Data from "./components/Data.vue"
import Vfor from "./components/V-for.vue"
import Vif from "./components/V-if.vue"
import Vshow from "./components/V-show.vue"

export default {
  components: {
    Computed,
    Created,
    Data,
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
  <!-- <Vfor/> -->
  <!-- <Vif/> -->
  <!-- <Vshow/> -->
  <!-- <Created @response="(msg) => childMsg = msg"/>
  <p>{{ childMsg }}</p> -->
  <!-- <Computed/> -->
  <Data/>
</template>
