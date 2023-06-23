<script setup lang="ts">
import { ref, watch } from 'vue'

const todoId = ref(1)

const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  todoData.value = await res.json()
}

fetchData()

watch(todoId, () => {
  return fetchData()
})
</script>

<template>
  <h3>Watcher & fetch:</h3>
  <button @click="todoId++">Fetch next todo ({{ todoId + 1 }})</button>

  <p v-if="!todoData">Loading...</p>
  <p v-else>
    {{ todoData.id }} - {{ todoData.title }} ({{
      todoData.completed ? 'completed' : 'not completed'
    }})
  </p>
</template>

<style scoped></style>
