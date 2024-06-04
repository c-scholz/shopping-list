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
        <RouterLink :to="{ name: 'list', params: { id: list.id } }">
          <h2>{{ list.name }}</h2>
        </RouterLink>
      </template>
      <template #subtitle v-if="list.dueDate">
        <span>Due: {{ renderDate(list.dueDate) }}</span>
      </template>
      <template #content v-if="list.items.length > 0">
        <p>
        <ul>
          <li v-for="item in list.items.slice(0, 3)" :key="item.id">
            {{ item.name }} {{ item.amount }} {{ item.unit }}
          </li>
        </ul>
        <span v-if="list.items.length > 3">...</span>
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="Remove" icon="pi pi-times" severity="secondary" v-on:click="() => removeList(list.id)"
            outlined />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.lists {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

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

:deep(.p-card-footer) {
  margin-top: auto;
}

.p-card-body h2 {
  margin: 0.5rem 0;
}

.p-card-body ul {
  padding-left: 1rem;
}

.p-card-body li {
  padding-left: 0;
  margin-bottom: 0.25rem;
}

.p-card-body p,
.p-card-body p>ul {
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>