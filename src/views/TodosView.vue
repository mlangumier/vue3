<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { uid } from 'uid'
import { Icon } from '@iconify/vue'
import TodoCreator from '@/components/todos/TodoCreator.vue'
import TodoItem from '@/components/todos/TodoItem.vue'
import type { ITodo } from '@/models/todos'

const todoList = ref<ITodo[]>([])

/**
 * Watches a variable/state and is activated everytime it changes
 * Here: everytime a prop from the TodoList changes, we save it to localStorage
 */
watch(
  todoList,
  (newValue, oldValue) => {
    // Can use newValue and oldValue as params (not needed here)

    setTodoListLocalStorage()
  },
  { deep: true } // to signal we want to watch changes in objets props in array
)

/**
 * Takes a getter function and returns de readOnly response object
 * Here: Will tell us when all todos have been completed
 */
const todoCompleted = computed(() => {
  // Array.every() will check that every statement in array is true
  return todoList.value.every((todo) => todo.isDone)
})

const fetchTodoList = () => {
  const storagedTodo = localStorage.getItem('todo-list')
  if (!storagedTodo) {
    return
  }

  todoList.value = JSON.parse(storagedTodo)
}
fetchTodoList() // We want it to run everytime the page is loaded

const setTodoListLocalStorage = () => {
  localStorage.setItem('todo-list', JSON.stringify(todoList.value))
}

const createTodo = (todo: string) => {
  todoList.value.push({
    id: uid(),
    todo,
    isDone: false,
    isEditing: false
  })

  setTodoListLocalStorage()
}

const toggleTodoComplete = (todoIndex: number) => {
  todoList.value[todoIndex].isDone = !todoList.value[todoIndex].isDone
}

const toggleEditTodo = (todoIndex: number) => {
  todoList.value[todoIndex].isEditing = !todoList.value[todoIndex].isEditing
}

const updateTodo = (todoIndex: number, newValue: string) => {
  todoList.value[todoIndex].todo = newValue
}

const deleteTodo = (todoId: string) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== todoId)
}
</script>

<template>
  <main>
    <h1>Create todos</h1>
    <p>
      This page was done following the instructions of
      <a href="https://www.youtube.com/watch?v=KTFH4P8unUQ" alt="tutorial todos and more"
        >this YT tutorial</a
      >
      and
      <a
        href="https://github.com/johnkomarnicki/vue-3-crash-course"
        alt="tutorial's github repository"
        >repository</a
      >
    </p>
    <TodoCreator @create-todo="createTodo" />

    <ul v-if="todoList.length">
      <TodoItem
        v-for="(todo, index) in todoList"
        :todo="todo"
        :index="index"
        :key="todo.id"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>

    <p v-else class="todo-msg">
      <Icon icon="ph:smiley-sad-light" width="22" height="22" />
      <span>You have no todos to complete! Add one!</span>
    </p>

    <p v-if="todoCompleted && todoList.length" class="todo-msg">
      <Icon icon="noto-v1:party-popper" />
      Congratz! You have completed all your todos!
      <Icon icon="noto-v1:party-popper" />
    </p>
  </main>
</template>

<style lang="scss" scoped>
ul {
  padding: 0;
}

.todo-msg {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  margin-top: 1rem;
}
</style>
