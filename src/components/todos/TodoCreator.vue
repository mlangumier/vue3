<script setup lang="ts">
import { reactive, ref } from 'vue'
import ButtonComponent from '@/components/misc/ButtonComponent.vue'

const todoState = reactive({
  todo: '',
  isError: false,
  errorMsg: ''
})
// Could use multiple ref instead, but reactive is easier
// const todo = ref('') // todo.value

const emit = defineEmits(['create-todo'])

const createTodo = () => {
  todoState.isError = false

  if (todoState.todo === '') {
    todoState.isError = true
    todoState.errorMsg = 'Todo value cannot be empty'
    return
  }

  emit('create-todo', todoState.todo)
  todoState.todo = ''
}
</script>

<template>
  <section :class="{ inputError: todoState.isError }">
    <div class="form">
      <input type="text" v-model="todoState.todo" />

      <!-- Use slots for reusable components (+name if needed) -->
      <!-- Actions (ex: click) only need to be sent to the component, not set in them -->
      <ButtonComponent @click="createTodo">
        <template v-slot:text>Create</template>
      </ButtonComponent>
    </div>

    <!-- Same as "v-if", but doesn't need to be re-rendered when visible -->
    <p v-show="todoState.isError" class="error">{{ todoState.errorMsg }}</p>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 2rem;
  width: 100%;
}

.form {
  display: flex;

  input {
    flex: 1;
  }
}

.inputError {
  p {
    text-align: center;
    color: red;
    font-size: 0.8rem;
  }
}
</style>
