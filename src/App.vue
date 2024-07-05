<script>
import Vfor from "./components/V-for.vue"
import Vif from "./components/V-if.vue"
import Vshow from "./components/V-show.vue"

export default {
  components: {
    Vfor,
    Vif,
    Vshow
  }
}
</script>

<template>
  <p>Добрый день!</p><br>
  <!-- <Vfor/> -->
  <!-- <Vif/> -->
  <Vshow/>
</template>
