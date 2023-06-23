<script setup lang="ts">
import { ref } from 'vue'

const textInput = ref('')

// Using "v-model='id'" allows for easy
</script>

<template>
  <div class="form-input">
    <label id="input">Two-way binding (write & read) & if/else: </label>

    <input v-model="textInput" id="input" placeholder="Enter text here..." />

    <p v-if="textInput">Your text: {{ textInput }}</p>
    <p v-else>Write something to see your text appear here</p>
  </div>
</template>

<style scoped>
.form-input {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
