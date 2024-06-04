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
    <span v-if="!isEdited" class="checkbox">
      <Checkbox v-model="updatedItem.checked" :binary="true" />
    </span>
    <span class="content">
      <span v-if="!isEdited" :class="['name', updatedItem.checked && 'checked']">
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
      <div class="buttons">
        <ToggleButton type="button" v-model="isEdited" onLabel="Done" offLabel="Edit" onIcon="pi pi-check"
          offIcon="pi pi-pencil" />
        <Button type="submit" severity="secondary" icon="pi pi-times" v-on:click="$emit('removeItem')" outlined />
      </div>
    </span>
  </div>
</template>

<style scoped>
.item-row {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  align-items: center;
}

.content,
.buttons {
  display: flex;
  align-items: center;
}

.content {
  gap: 1rem;
  flex-wrap: wrap;
}

.name {
  flex-grow: 10;
}

.name.checked {
  text-decoration: line-through;
}

.content,
.amount,
.unit {
  flex-grow: 1;
}

.name,
.amount {
  line-height: 1.5rem;
}

.buttons {
  gap: 0.5rem;
}

.p-button {
  justify-content: center;
  white-space: nowrap;
}

.p-button,
.p-togglebutton {
  line-height: 1.5rem;
}

.p-inputtext,
.p-inputnumber {
  width: 100%;
}
</style>