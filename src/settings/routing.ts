import { createWebHistory, createRouter } from 'vue-router'

import ShoppingListDetails from '@/views/ShoppingListDetails.vue'
import ShoppingListOverview from '@/views/ShoppingListOverview.vue'


const routes = [
  { path: '/', component: ShoppingListOverview },
  {
    path: '/list/:id',
    name: 'list',
    component: ShoppingListDetails,
    props: true,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})