<script setup lang="ts">
import AddListForm from '@/components/AddListForm.vue'
import { renderDate } from '@/settings/helpers'
import { useLists } from '@/stores/listStore'

const { sortedLists, addList, removeList } = useLists()
</script>

<template>
  <AddListForm v-on:add-list="addList" />
  <div class="lists">
    <Card v-for="list in sortedLists" :key="list.id">
      <template #title>
        <RouterLink :to="{ name: 'list', params: { id: list.id } }">{{ list.name }}</RouterLink>
      </template>
      <template #subtitle>
        {{ renderDate(list.dueDate) }}
      </template>
      <template #content>
        <p class="m-0">
        <ul>
          <li v-for="item in list.items" :key="item.id">
            {{ item.name }} {{ item.amount }} {{ item.unit }}
          </li>
        </ul>
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="Remove" icon="pi pi-times" severity="secondary" outlined class="w-full"
            v-on:click="() => removeList(list.id)" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.lists {
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

:deep(.p-card-body) {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
</style>