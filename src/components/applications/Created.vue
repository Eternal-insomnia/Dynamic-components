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