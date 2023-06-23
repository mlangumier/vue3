<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

const increment = () => counter.value++
const decrement = () => counter.value--
const reset = () => (counter.value = 0)
</script>

<template>
  <div class="counter">
    <p>Here's a counter:</p>
    <button type="button" @click="decrement" class="count">-</button>
    <button type="button" @click="reset">{{ counter }}</button>
    <button type="button" @click="increment" class="count">+</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.count {
  width: 2rem;
}
</style>
