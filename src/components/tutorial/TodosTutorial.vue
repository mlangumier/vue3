<script setup lang="ts">
import { ref, computed } from 'vue'

let id = 0

const defaultList = ref([
  { id: id++, text: 'First item', done: true },
  { id: id++, text: 'Second item', done: true },
  { id: id++, text: 'Third item', done: false }
])

const todoInput = ref('')

const hideCompleted = ref(false)

const filteredList = computed(() => {
  return hideCompleted.value ? defaultList.value.filter((item) => !item.done) : defaultList.value
})

function addTodo() {
  defaultList.value.push({ id: id++, text: todoInput.value, done: false })
  todoInput.value = ''
}

function removeItem(targetItem) {
  defaultList.value = defaultList.value.filter((item) => item !== targetItem)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    Add an item: <input v-model="todoInput" /> <button>Add</button>
  </form>

  <ul class="todos">
    <li v-for="item in filteredList" :key="item.id" class="item">
      <input type="checkbox" v-model="item.done" />
      <span :class="{ done: item.done }">
        {{ item.text }}
      </span>
      <button @click="removeItem(item)">X</button>
    </li>
  </ul>

  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style scoped>
.todos {
  max-width: max-content;
}
.item {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.done {
  text-decoration: line-through;
}
</style>
