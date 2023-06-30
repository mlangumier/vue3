<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { axiosDnd } from '@/services/axiosClient'
import type { IClassInfo } from '@/models/dnd-class'
import DndClassComponent from '@/components/DndClassComponent.vue'

const route = useRoute()

const classe = ref<IClassInfo>()

watch(
  route,
  () => {
    getClassInfo()
  },
  { deep: true }
)

const getClassInfo = async () => {
  try {
    const res = await axiosDnd.get(`/classes/${route.params.id}`)
    classe.value = res.data
  } catch (error) {
    console.log('Fetch classes:', error)
  }
}

onMounted(() => {
  getClassInfo()
})
</script>

<template>
  <section v-if="classe">
    <h2>The {{ classe?.name }}</h2>
    <DndClassComponent :classe="classe" />
  </section>
  <section v-else>
    <p>Couldn't get the class. Please try again.</p>
  </section>
</template>

<style lang="scss" scoped></style>
