<script setup lang="ts">
import { v4 as uuid } from 'uuid'
import { ref } from 'vue'
import type { List } from '@/settings/types'

const emit = defineEmits(['addList'])

const nextList = ref<Partial<List>>({} as Partial<List>)

const addList = () => {
  const newList = {
    ...nextList.value,
    items: [],
    id: uuid(),
  } as List
  emit('addList', newList)
  nextList.value = {} as Partial<List>
}

</script>

<template>
  <form v-on:submit.prevent="addList">
    <div class="form-row">
      <FloatLabel class="name">
        <InputText v-model="nextList.name" inputId="list-name" required />
        <label for="list-name">Name *</label>
      </FloatLabel>
      <FloatLabel class="date">
        <Calendar v-model="nextList.dueDate" inputId="list-duedate" date-format="dd.mm.y" showIcon />
        <label for="list-duedate">Due date</label>
      </FloatLabel>
      <Button type="submit" icon="pi pi-plus" iconPos="left">Add list</Button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form-row {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}

.name,
.date {
  flex-grow: 1;
}

.p-inputtext,
.p-calendar {
  width: 100%;
}

.p-button {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 4.5em;
  white-space: nowrap;
}
</style>