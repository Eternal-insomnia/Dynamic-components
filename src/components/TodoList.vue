<template>
  <p>TodoList здесь!</p><br>
  <input v-model="newTodo" @input="regexTest" placeholder="Задание из двух слов">
  <button v-if="nameMatches" @click="addTodo">Добавить задание</button>
  <button v-else disabled>Добавить задание</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.task }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<script>
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
  }
}
</script>