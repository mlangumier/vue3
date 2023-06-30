import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Actions
  function increment(value = 1) {
    count.value += value
  }

  // Getters:
  const doubleCount = computed(() => count.value * 2)
  const doublePlusOne = computed(() => doubleCount.value + 1)

  return { count, increment, doubleCount, doublePlusOne }
})
