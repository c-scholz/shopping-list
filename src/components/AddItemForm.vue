<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

const emit = defineEmits(['addItem', 'error'])

const nextItem = ref<string | undefined>()
const nextAmount = ref<string | undefined>()

const addItem = () => {
  emit('addItem', {
    id: uuid(),
    name: nextItem.value,
    checked: false,
    amount: nextAmount.value,
  })
  nextItem.value = undefined
  nextAmount.value = undefined
}

</script>

<template>
  <form v-on:submit.prevent="addItem">
    <div class="form-row">
      <FloatLabel>
        <InputText id="next-item" v-model="nextItem" required="true" />
        <label for="next-item">Item</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="next-amount" type="text" v-model="nextAmount" />
        <label for="next-amount">Amount</label>
      </FloatLabel>
      <Button type="submit">Add item</Button>
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