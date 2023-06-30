<script setup lang="ts">
const props = defineProps({
  classe: { type: Object, required: true }
})
</script>

<template>
  <div>
    <ul class="subclasses">
      Subclasses:
      <li v-for="subclass in classe.subclasses" :key="subclass.index">
        {{ subclass.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.subclasses {
  display: flex;
  gap: 0.5rem;

  li:not(:first) {
    padding: 0 0.2rem;
    border-left: 1px solid lightgrey;
  }
}
</style>
