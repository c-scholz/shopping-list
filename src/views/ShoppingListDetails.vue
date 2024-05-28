<script setup lang="ts">
import { useLists } from '@/stores/listStore'
import AddItemForm from '@/components/AddItemForm.vue'
import EditShoppingListForm from '@/components/EditShoppingListForm.vue'
import ShoppingItem from '@/components/ShoppingItem.vue'

const { id } = defineProps<{
  id: string
}>()

const { lists, updateList, addItem, removeItem } = useLists()

const list = lists.find(list => list.id === id)

</script>

<template>
  <div>{{ id }}</div>
  <div v-if="list !== undefined">
    <EditShoppingListForm :list="list" v-on:update-list="(updatedList) => updateList(updatedList)" />
    <AddItemForm v-on:add-item="(newItem) => addItem(newItem, list)" />
    <ul>
      <li v-for="(item, idx) in list.items" v-bind:key="idx">
        <ShoppingItem v-bind="item" v-on:remove-item="(removedItem) => removeItem(removedItem, list)" />
      </li>
    </ul>
  </div>

</template>

<style scoped>
ul {
  padding-left: 0;
}

li {
  list-style: none;
}
</style>
