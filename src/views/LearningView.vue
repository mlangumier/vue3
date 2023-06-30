<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Counter from '../components/tutorial/CounterTutorial.vue'
import Input from '../components/tutorial/InputTutorial.vue'
import Todos from '../components/tutorial/TodosTutorial.vue'
import Watcher from '../components/tutorial/WatcherTutorial.vue'
import ChildProps from '../components/tutorial/ChildPropsTutorial.vue'

const firstName = 'Mathieu'

const pElementRef = ref(null)

const childMessage = ref('Hello from parent!')
const childResponse = ref('No child response yet...')

const customTextColor = ref('blue-text')

const switchTextColor = () => {
  // Change class for text-color
  customTextColor.value = customTextColor.value === 'blue-text' ? 'red-text' : 'blue-text'
}

onMounted(() => {
  if (!pElementRef.value) {
    return
  }

  pElementRef.value.textContent = 'This ref-element is now mounted'
})
</script>

<template>
  <main class="main">
    <h1>VueJS 3 Tutorial</h1>

    <section>
      <p>
        Based on the
        <a href="https://vuejs.org/tutorial/#step-1" alt="Tutorial Vue.js">tutorial from Vue.js</a>
        using the
        <a href="https://vuejs.org/guide/introduction.html#api-styles" alt="Api Styles">
          Composition Api
        </a>
        in
        <a href="https://vuejs.org/guide/scaling-up/sfc.html" alt="Single-Page Components">
          SFC (Single-File Components).
        </a>
      </p>
    </section>

    <section>
      <h2>Basics & dynamic data</h2>

      <p>This is my dynamic name: {{ firstName }}</p>
      <p :class="customTextColor">
        Here's a dynamic custom class that changes color on
        <button @click="switchTextColor">Click!</button>
      </p>
    </section>

    <section>
      <h2>Now interactible components</h2>

      <Counter />
      <Input />
    </section>

    <section>
      <h2>Todo list with input & computed data</h2>
      <Todos />
    </section>

    <section>
      <h2>DOM manipulation</h2>
      <p ref="pElementRef">Hello, there!</p>

      <Watcher />
    </section>

    <section>
      <h2>Children components</h2>
      <ChildProps :message="childMessage" @response="(msg:string) => (childResponse = msg)">
        <p>- This is how to use children (slots) with ChildrenComponents</p>
      </ChildProps>
      {{ childResponse.response }} (+ {{ childResponse.test }})
    </section>
  </main>
</template>

<style scoped lang="scss">
section {
  margin-top: 2rem;
}

.blue-text {
  color: steelblue;
}
.red-text {
  color: rgb(202, 17, 17);
}
</style>
