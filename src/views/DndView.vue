<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { axiosDnd } from '@/services/axiosClient'
import type { IClass } from '@/models/dnd-class'

const classes = ref<IClass[]>([])

const getClasses = async () => {
  try {
    const res = await axiosDnd.get('/classes')
    classes.value = res.data.results
  } catch (error) {
    console.log('Fetch classes:', error)
  }
}

onMounted(() => {
  getClasses()
})
</script>

<template>
  <main>
    <div class="intro">
      <h1>Dungeons & Dragons</h1>
      <p>Fetch data from a public API with Axios & display nested-routes with Vue Router</p>
    </div>

    <section>
      <h2>Classes</h2>
      <ul>
        <li v-for="classe in classes" :key="classe.index">
          <RouterLink
            :to="{ name: 'Classes', params: { id: classe.index }, replace: false }"
            active-class="active"
            >{{ classe.name }}</RouterLink
          >
        </li>
      </ul>
    </section>

    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
section {
  margin-top: 2rem;
}

.intro {
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
}

ul {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  row-gap: 1rem;
  flex-wrap: wrap;
}

li {
  cursor: pointer;

  a {
    padding: 0.4rem 0.6rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    color: var(--color-text);

    &:hover {
      color: var(--vt-c-white);
    }
  }
}

.active {
  color: var(--vt-c-white);
  background-color: var(--vt-c-indigo);

  &:hover {
    background-color: var(--vt-c-green);
  }
}
</style>
