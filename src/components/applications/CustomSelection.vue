<template>
  <div class="custom-select-application">
    <p>CustomSelect здесь!</p>
    <div 
      class="choice" 
      :class="{ selected: !itemsHide }" 
      @click="itemsHide = !itemsHide"
      :style="{ backgroundImage: `url(/src/assets/images/${choice}.jpg)`, backgroundSize: `100% 100%`}"
    >
      <span class="item-number">{{ choice }}</span>
    </div>
    <div class="items-list" :class="{ hide: itemsHide }">
      <div 
        class="item" 
        :class="{ hide: itemsHide }" 
        @click="optionSelect(option)" 
        v-for="option in options"
        :style="{ backgroundImage: `url(/src/assets/images/${option}.jpg)`, backgroundSize: `100% 100%` }"
      >
        <span class="item-number">{{ option }}</span>
      </div>
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
  height: 100px;
  width: 150px;
}
.choice:hover {
  cursor: pointer;
  border: 2px, solid, #ccc;
}
.custom-select-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}
.item {
  color: #ffa023;
  font-size: 20px;
  height: 100px;
  width: 150px;
}
.item:hover {
  cursor: pointer;
  border: 2px, solid, #ccc;
}
.item-number {
  padding-left: 10px;
}
.items-list {
  height: 200px;
  width: 150px;
  overflow-y: scroll;
  border: 2px, solid, #ccc;
  overflow-x: hidden;
}
.selected {
  border: 2px, solid, #ccc;
}
.hide {
  display: none;
}
</style>