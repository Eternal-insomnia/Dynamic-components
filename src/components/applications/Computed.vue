<template>
  <div class="computed-application">
    <p>Computed здесь!</p>
    <p>Ваша библиотека:</p>
    <ul class="book-list">
      <li class="book" v-for="book in filteredLibrary">
        <input type="checkbox" v-model="book.done">
        <span>{{ book.name }}, {{ book.author }}</span>
        <button class="delete-button" @click="removeBook(book)">X</button>
      </li>
    </ul>
    <button @click="hideRead = !hideRead">
      {{ hideRead ? 'Показать все книги' : 'Скрыть прочинанные книги' }}
    </button>
    <form class="book-form" @submit.prevent="addBook">
      <input v-model="bookName" required placeholder="книга"><br>
      <input v-model="bookAuthor" required placeholder="автор"><br>
      <button type="submit">Добавить книгу</button>
    </form>
  </div>
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
.book {
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
}
.book-form {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.book-list {
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
}
.computed-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
.delete-button {
  border-color: #9a1010;
  background-color: #ffa2b5;
  color: #9a1010;
  height: 1.5rem;
  width: 1.5rem;
}
</style>