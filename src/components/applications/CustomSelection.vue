<template>
  <div class="custom-select-application">
    <p>CustomSelect здесь!</p>
    <div 
      class="choice" 
      :class="{ selected: !itemsHide }" 
      @click="itemsHide = !itemsHide"
      :style="{ backgroundImage: `url(/src/assets/images/${choice}.jpg)`, backgroundSize: `100% 100%`}"
    >
      {{ choice }}
    </div>
    <div 
      class="items" 
      :class="{ hide: itemsHide }" 
      @click="optionSelect(option)" 
      v-for="option in options"
      :style="{ backgroundImage: `url(/src/assets/images/${option}.jpg)`, backgroundSize: `100% 100%` }"
    >
      {{ option }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [1, 2, 3, 4, 5, 6],
      choice: 1,
      itemsHide: true
    }
  },
  methods: {
    optionSelect(option) {
      this.choice = option
      this.itemsHide = true
    }
  }
}
</script>

<style scoped>
.choice {
  color: #ffa023;
  font-size: 20px;
  padding-left: 10px;
  height: 100px;
}
.custom-selection-application {
  display:unset; 
  cursor: pointer;
}
.hide {
  display: none;
}
.items {
  color: #ffa023;
  font-size: 20px;
  padding-left: 10px;
  height: 100px;
}
.selected {
  border: 2px, solid, #ccc;
}
</style>