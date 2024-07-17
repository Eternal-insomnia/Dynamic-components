<template>
  <div class="data-application">
    <p>Data здесь!</p>
    <p class="quote">{{ message }}</p>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      message: "Если закрыть глаза, становится темно. (с)Джейсон Стетхем"
    }
  }
}
</script>

<style>
.data-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  overflow-y: auto; 
}
.quote {
  text-align: center;
}
</style>