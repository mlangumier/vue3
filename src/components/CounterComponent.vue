<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore() // Can't be destructured
</script>

<template>
  <section>
    <h2>Pinia: State management tool</h2>

    <p>Count: {{ store.count }}</p>
    <p>Double: {{ store.doubleCount }} (+1 -> {{ store.doublePlusOne }})</p>

    <button @click="store.increment()">Increment</button>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 2rem;
}
</style>
