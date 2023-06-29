<script setup lang="ts">
import { RouterLink } from 'vue-router'

const routes = [
  { path: '/', name: 'Home' },
  { path: '/tutorial', name: 'Tutorial' },
  { path: '/todos', name: 'Todos List' }
]
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />

    <nav>
      <RouterLink v-for="route in routes" :key="route.name" :to="route.path">{{
        route.name
      }}</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  max-height: 100vh;
  display: flex;
  place-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 10px 5px rgba(150, 150, 150, 0.25);
}

.logo {
  display: block;
  margin-right: 2rem;
}

nav {
  width: 100%;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &:first-of-type {
      border: 0;
    }

    &.router-link-exact-active {
      color: var(--color-text);

      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
