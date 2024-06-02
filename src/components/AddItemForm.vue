<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import type { Item } from '@/settings/types';

const emit = defineEmits(['addItem', 'error'])

const nextItem = ref<Partial<Item>>({} as Partial<Item>)

const addItem = () => {
  emit('addItem', {
    ...nextItem.value,
    id: uuid(),
    checked: false,
  })
  nextItem.value = {} as Partial<Item>
}

</script>

<template>
  <form v-on:submit.prevent="addItem">
    <div class="form-row">
      <FloatLabel class="item">
        <InputText id="next-item" v-model="nextItem.name" required="true" />
        <label for="next-item">Item</label>
      </FloatLabel>
      <FloatLabel class="amount">
        <InputNumber id="next-amount" v-model="nextItem.amount" />
        <label for="next-amount">Amount</label>
      </FloatLabel>
      <FloatLabel class="unit">
        <InputText id="next-unit" v-model="nextItem.unit" />
        <label for="next-unit">Unit</label>
      </FloatLabel>
      <Button type="submit" icon="pi pi-plus" iconPos="left">Add item</Button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form-row {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}

.item {
  flex-grow: 1;
  flex-basis: 20em;
}

.amount,
.unit {
  flex-grow: 1;
  flex-basis: 1em;
}

.p-float-label>label {
  top: 1.3em;
}

.p-inputtext,
.p-inputnumber {
  min-width: 100%;
}

.p-button {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 4.5em;
  white-space: nowrap;
}
</style>