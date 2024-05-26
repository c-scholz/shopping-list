<script setup lang="ts">
import ErrorMessage from './ErrorMessage.vue'
import { ref } from 'vue';
const emit = defineEmits(['addItem', 'error'])

const nextItem = ref<string | undefined>()
const nextAmount = ref<string | undefined>()
const error = ref<string | undefined>()

const addItem = () => {
  error.value = undefined
  if (nextItem.value === undefined) {
    error.value = `Please add a name for the item you want to add!`
    return
  }

  emit('addItem', {
    name: nextItem.value,
    checked: false,
    amount: nextAmount.value,
  })
  nextItem.value = undefined
  nextAmount.value = undefined
}

</script>

<template>
  <ErrorMessage v-bind:msg="error" />
  <form v-on:submit.prevent="addItem">
    <input type="text" v-model="nextItem" placeholder="Item" />
    <input type="text" v-model="nextAmount" placeholder="amount" />

    <button type="submit">Add item</button>
  </form>
</template>

<style scoped></style>