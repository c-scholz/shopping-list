<script setup lang="ts">
import { ref, toRef } from 'vue'
import { type Item } from '@/settings/types'

defineEmits(['removeItem'])

const props = defineProps<{
  item: Item
}>()

const updatedItem = toRef(() => props.item)

const isEdited = ref(false)
</script>

<template>
  <div class="item-row">
    <span class="checkbox">
      <Checkbox v-model="updatedItem.checked" :binary="true" />
    </span>
    <span v-if="!isEdited" class="name">
      {{ item.name }}
    </span>
    <FloatLabel v-if="isEdited" class="name">
      <InputText v-model="updatedItem.name" required inputId="{{ id }}-name" />
      <label for="{{ id }}-name">Item*</label>
    </FloatLabel>
    <span v-if="!isEdited" class="amount">
      {{ item.amount }} {{ item.unit }}
    </span>
    <FloatLabel v-if="isEdited" class="amount">
      <InputNumber v-model="updatedItem.amount" inputId="{{ id }}-amount" :min="0" showButtons />
      <label for="{{ id }}-amount">Amount</label>
    </FloatLabel>
    <FloatLabel v-if="isEdited" class="unit">
      <InputText v-model="updatedItem.unit" inputId="{{ id }}-unit" />
      <label for="{{ id }}-unit">Unit</label>
    </FloatLabel>
    <ToggleButton type="button" v-model="isEdited" onLabel="Done" offLabel="Edit" onIcon="pi pi-check"
      offIcon="pi pi-pencil" />
    <Button type="submit" icon="pi pi-times" v-on:click="$emit('removeItem')" />
  </div>
</template>

<style scoped>
.item-row {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  align-items: center;
}

.checkbox {
  display: flex;
  flex: 0 0 2em;
}

.name {
  flex: 1 1 5em;
}

.amount,
.unit {
  flex: 0.125 1 2em;
}

.p-button,
.p-togglebutton {
  flex: 0 0 4em;
}

.p-float-label>label {
  top: 40%;
}

.p-inputtext {
  width: 100%;
}

.p-button {
  height: 3em;
  justify-content: center;
  white-space: nowrap;
}
</style>