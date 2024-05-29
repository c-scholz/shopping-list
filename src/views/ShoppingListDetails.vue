<script setup lang="ts">
import { useLists } from '@/stores/listStore'
import AddItemForm from '@/components/AddItemForm.vue'
import EditShoppingListForm from '@/components/EditShoppingListForm.vue'
import ShoppingItem from '@/components/ShoppingItem.vue'

const { items, list, addItem, removeItem } = useLists()
</script>

<template>
  <div class="list-container">
    <EditShoppingListForm :list="list" />
    <AddItemForm v-on:add-item="addItem" />
    <ul>
      <li v-for="(item, idx) in items" v-bind:key="item.id">
        <ShoppingItem :item="item" v-on:remove-item="removeItem(idx)" />
      </li>
    </ul>
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
