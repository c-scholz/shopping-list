import { createWebHistory, createRouter } from 'vue-router'
import ShoppingListDetails from '@/views/ShoppingListDetails.vue'

const routes = [
  {
    path: '/',
    component: ShoppingListDetails,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})