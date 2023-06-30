import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LearningView.vue')
    },
    {
      path: '/todos',
      name: 'Todos List',
      component: () => import('../views/TodosView.vue')
    },
    {
      path: '/dungeons-and-dragons',
      name: 'D&D',
      component: () => import('../views/DndView.vue'),
      children: [
        {
          path: 'classes/:id',
          name: 'Classes',
          component: () => import('../views/DndClassView.vue')
        }
      ]
    }
  ]
})

export default router
