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

<style>
.mounted-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>