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