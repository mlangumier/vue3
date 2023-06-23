<script setup lang="ts">
const props = defineProps({
  message: String
})

const emit = defineEmits(['responseMsg', 'test'])

emit('response', { response: 'Hello from Child', test: 'Testing from child!' })
</script>

<template>
  <p>Message received from parent component: {{ message || 'No message received' }}</p>

  <!-- This will receive the children of the parent -->
  <slot />
</template>

<style scoped></style>
