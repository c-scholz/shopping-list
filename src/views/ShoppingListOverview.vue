<script setup lang="ts">
import { useLists } from '@/stores/listStore'
import AddListForm from '@/components/AddListForm.vue'
import { storeToRefs } from 'pinia';

const store = useLists()

const { sortedLists } = storeToRefs(store)
</script>

<template>
  <div>
    <AddListForm v-on:add-list="store.addList" />
  </div>
  <div class="cards">
    <Card v-for="list in sortedLists" v-bind:key="list.id">
      <template #title>
        <RouterLink :to="{ name: 'list', params: { id: list.id } }">{{ list.name ?? 'Unnamed List' }}</RouterLink>
      </template>
      <template #content>
        {{ list.dueDate }}
      </template>
    </Card>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>