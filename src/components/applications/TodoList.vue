<template>
  <div class="todo-list-application">
    <p>{{ localeComponent.title }}</p>
    <div class="new-todo">
      <input v-model="newTodo" @input="regexTest" :placeholder="localeComponent.placeholder">
      <button v-if="nameMatches" @click="addTodo">{{ localeComponent.addTask }}</button>
      <button v-else disabled>{{ localeComponent.addTask }}</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.task }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

let id = 0
const re = new RegExp("^[a-zA-Z]+ [a-zA-Z]+$|^[а-яА-Я]+ [а-яА-Я]+$")
export default {
  data() {
    return {
      newTodo: "",
      nameMatches: false,
      todos: []
    }
  },
  methods: {
    addTodo() {
      var tmpArr = this.newTodo.split(' ')
      this.newTodo = ""
      tmpArr.forEach(element => {
        this.newTodo += element[0].toUpperCase() + element.slice(1) + ' '
      });
      this.todos.push({id: id++, task: this.newTodo})
      this.newTodo = ""
      this.nameMatches = false
    },
    regexTest() {
      if (re.test(this.newTodo)) { 
        this.nameMatches = true
      } else { 
        this.nameMatches = false 
      }
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((elem) => elem != todo)
    }
  },
  computed: {
    ...mapState(['locale']),
    localeComponent() {
      return this.locale.application.todoList
    }
  }
}
</script>

<style scoped>
button:disabled {
  border: solid;
  border-color: #aaa;
  border-radius: 1rem;
  background-color: #eee;
}
.new-todo {
  display: flex;
  justify-content: space-between;
}
.todo-list-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
</style>