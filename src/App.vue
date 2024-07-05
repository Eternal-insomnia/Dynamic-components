<script>
import Vfor from "./components/V-for.vue"
import Vif from "./components/V-if.vue"
import Vshow from "./components/V-show.vue"
import Created from "./components/Created.vue"

export default {
  components: {
    Vfor,
    Vif,
    Vshow,
    Created
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
  <Created @response="(msg) => childMsg = msg"/>
  <p>{{ childMsg }}</p>
</template>
