<script setup lang="ts">
import AddItemForm from './AddItemForm.vue'
import ShoppingItem from './ShoppingItem.vue'

import { items, removeItem, addItem } from '../interfaces/storageInterface';
</script>

<template>
  <AddItemForm v-on:add-item="(toAdd) => addItem(toAdd)" />
  <ul>
    <li v-for="(item, idx) in items" v-bind:key="idx">
      <ShoppingItem v-bind="item" v-on:remove-item="() => removeItem(idx)" />
    </li>
  </ul>
</template>

<style scoped>
li {
  list-style: none;
}
</style>