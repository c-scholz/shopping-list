<script setup lang="ts">
import { type Item } from '@/settings/types'
import { ref } from 'vue'

defineEmits(['removeItem'])

const props = defineProps<{
  item: Item
}>()

const updatedItem = ref(props.item)

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
      <InputText v-model="updatedItem.name" required id="{{ id }}-name" />
      <label for="{{ id }}-name">Item</label>
    </FloatLabel>
    <span v-if="!isEdited" class="amount">
      {{ item.amount }}
    </span>
    <FloatLabel v-if="isEdited" class="amount">
      <InputText v-model="updatedItem.amount" required id="{{ id }}-amount" />
      <label for="{{ id }}-amount">Amount</label>
    </FloatLabel>
    <ToggleButton type="button" v-model="isEdited" onLabel="Done" offLabel="Edit" onIcon="pi pi-check"
      offIcon="pi pi-pencil" />
    <Button type="submit" icon="pi pi-times" v-on:click="$emit('removeItem', updatedItem)" />
  </div>
</template>

<style scoped>
.item-row {
  display: flex;
  gap: 0.25em;
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

.amount {
  flex: 1 1 3em;
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