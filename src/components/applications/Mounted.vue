<template>
  <div class="mounted-application">
    <p>Mounted здесь!</p>
    <p ref="pElementRef">Не смонтировано</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.pElementRef.textContent = "Смонтировано"
  }
}
</script>