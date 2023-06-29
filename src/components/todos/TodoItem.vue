<script setup lang="ts">
import { Icon } from '@iconify/vue'

// const props = defineProps(['todo']) // Possible, but not practical
const props = defineProps({
  todo: { type: Object, required: true },
  index: { type: Number, required: true }
})

defineEmits(['toggle-complete', 'edit-todo', 'update-todo', 'delete-todo'])
</script>

<template>
  <li>
    <input type="checkbox" :checked="todo.isDone" @input="$emit('toggle-complete', index)" />

    <div class="item">
      <!-- Using IF bcs we don't want all items to render the input if not needed -->
      <input
        v-if="todo.isEditing"
        type="text"
        :value="todo.todo"
        @input="$emit('update-todo', index, ($event.target as any)?.value)"
      />
      <span v-else :class="{ 'complete-todo': todo.isDone }">{{ todo.todo }}</span>
    </div>

    <div class="todo-actions">
      <Icon
        v-if="todo.isEditing"
        @click="$emit('edit-todo', index)"
        icon="ph:check-circle"
        color="#41b080"
        class="icon"
        width="22"
        height="22"
      />
      <Icon
        v-else
        @click="$emit('edit-todo', index)"
        icon="ph:pencil-fill"
        color="#41b080"
        class="icon"
        width="22"
        height="22"
      />
      <Icon
        @click="$emit('delete-todo', todo.id)"
        icon="ph:trash"
        color="#f95e5e"
        class="icon"
        width="22"
        height="22"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: rgb(236, 236, 236);
  padding: 0.5rem 1rem;
}

input[type='checkbox'] {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid lightgrey;
  cursor: pointer;

  &:checked {
    background-color: rgb(64, 116, 64);
  }
}

.complete-todo {
  text-decoration: line-through;
}

.item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.todo-actions .icon {
  margin: auto 0.2rem;
  cursor: pointer;
}
</style>
