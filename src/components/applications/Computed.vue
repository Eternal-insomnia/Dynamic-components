<template>
  <p>Computed здесь!</p>
  <p>Ваша библиотека:</p><br>
  <ul>
    <li v-for="book in filteredLibrary">
      <input type="checkbox" v-model="book.done">
      <span :class="{ done: book.done }"> {{ book.name }}, {{ book.author }}</span>
      <button @click="removeBook(book)">X</button>
    </li>
  </ul><br>
  <button @click="hideRead = !hideRead">
    {{ hideRead ? 'Показать все книги' : 'Скрыть прочинанные' }}
  </button>

  <br><br>
  
  <form @submit.prevent="addBook">
    <input v-model="bookName" required placeholder="книга"><br>
    <input v-model="bookAuthor" required placeholder="автор"><br>
    <button>Добавить книгу</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      library: [
        {author: "Герберт Уэллс", name: "Машина времени", done: false},
        {author: "Дмитрий Глуховский", name: "Метро 2033", done: false},
        {author: "А.С. Пушкин", name: "Капитанская дочка", done: false}
      ],
      bookName: "",
      bookAuthor: "",
      hideRead: false
    }
  },
  computed: {
    filteredLibrary() {
      return this.hideRead
        ? this.library.filter((b) => !b.done)
        : this.library
    }
  },
  methods: {
    addBook() {
      this.library.push({author: this.bookAuthor, name: this.bookName, done: false})
      this.bookAuthor = ""
      this.bookName = ""
    },
    removeBook(book) {
      this.library = this.library.filter((b) => b !== book)
    }
  }
}
</script>

<style scoped>
.read {
  text-decoration: line-through;
}
</style>