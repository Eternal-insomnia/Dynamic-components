<template>
  <div class="created-application">
    <p>Created здесь!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Привет от created!"
    }
  },
  emits: ["response"],
  created() {
    this.$emit("response", this.msg)
  }
}
</script>

<style>
.created-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>