<script setup lang="ts">
import { toRef } from 'vue'
import AddItemForm from '@/components/AddItemForm.vue'
import EditShoppingListForm from '@/components/EditShoppingListForm.vue'
import ShoppingItem from '@/components/ShoppingItem.vue'
import { renderDate } from '@/settings/helpers'
import { useLists } from '@/stores/listStore'

const { id } = defineProps<{
  id: string
}>()

const { lists, addItem, removeItem } = useLists()

const list = toRef(lists.value[lists.value.findIndex(list => list.id === id)])
</script>

<template>
  <div v-if="list">
    <Card>
      <template #title>
        <h2>{{ list.name }}</h2>
      </template>
      <template #subtitle v-if="list.dueDate">
        <h3>Due: {{ renderDate(list.dueDate) }}</h3>
      </template>
      <template #footer>
        <EditShoppingListForm :list="list" />
      </template>
    </Card>
    <div class="list-container">
      <AddItemForm v-on:add-item="(newItem) => addItem(newItem, list.id)" />
      <ul>
        <li v-for="item in list.items" v-bind:key="item.id">
          <ShoppingItem :item="item" v-on:remove-item="() => removeItem(item.id, list.id)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.list-container>* {
  margin-top: 2em;
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
}
</style>
