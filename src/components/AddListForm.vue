<script setup lang="ts">
import type { List } from '@/settings/types'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
const emit = defineEmits(['addList'])

const nextListName = ref<string | undefined>()
const nextListDueDate = ref<string | undefined>()

const addList = () => {
  emit('addList', {
    id: uuid(),
    name: nextListName.value,
    dueDate: nextListDueDate.value,
  } as List)
  nextListName.value = undefined
  nextListDueDate.value = undefined
}

</script>

<template>
  <form v-on:submit.prevent="addList">
    <div class="form-row">
      <FloatLabel>
        <InputText id="next-item" v-model="nextListName" />
        <label for="next-item">Name</label>
      </FloatLabel>
      <FloatLabel>
        <Calendar id="next-amount" v-model="nextListDueDate" dateFormat="dd.mm.yy" />
        <label for="next-amount">Due date</label>
      </FloatLabel>
      <Button type="submit">Add list</Button>
    </div>
  </form>
</template>

<style scoped>
.form-row {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
}

.p-float-label {
  flex: 1 1 auto;
}

.p-float-label>label {
  top: 40%;
}

.p-inputtext {
  width: 100%;
}

.p-button {
  flex: 1 1 6em;
  justify-content: center;
  white-space: nowrap;
}
</style>