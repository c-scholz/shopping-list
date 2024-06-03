import { createWebHistory, createRouter } from 'vue-router'
import ShoppingLists from '@/views/ShoppingLists.vue'
import ShoppingListDetails from '@/views/ShoppingListDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShoppingLists,
  },
  {
    path: '/list/:id',
    name: 'list',
    component: ShoppingListDetails,
    props: true
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})