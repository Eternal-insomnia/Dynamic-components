<script>
export default {
  mounted() {
    this.$refs.pElementRef.textContent = "Смонтировано"
  }
}
</script>

<template>
  <p>Mounted здесь!</p><br>
  <p ref="pElementRef">Не смонтировано</p>
</template>