<script setup lang="ts">
import { ref, toRef } from 'vue'
import type { List } from '@/settings/types'

const props = defineProps<{
  list: List
}>()

const updatedList = toRef(() => props.list)

const isEdited = ref(false)
</script>

<template>
  <div class="form-row">
    <FloatLabel v-if="isEdited">
      <InputText v-model="updatedList.name" inputId="list-name" required />
      <label for="list-name">Name</label>
    </FloatLabel>
    <FloatLabel v-if="isEdited">
      <Calendar v-model="updatedList.dueDate" inputId="list-duedate" date-format="dd.mm.y" showIcon />
      <label for="list-duedate">Due date</label>
    </FloatLabel>
    <ToggleButton type="button" v-model="isEdited" onLabel="Done" offLabel="Edit List" onIcon="pi pi-check"
      offIcon="pi pi-pencil" />
  </div>
</template>

<style scoped>
.form-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.p-float-label {
  flex: 1 1 auto;
}

.p-inputtext {
  width: 100%;
}

.p-button {
  flex: 0 0 2em;
  justify-content: center;
  white-space: nowrap;
}

.p-togglebutton .p-button {
  gap: 0.5em;
}
</style>