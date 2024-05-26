import { type Item } from '../settings/types'
import { ref } from 'vue'

export const items = ref<Item[]>([])

export const addItem = (newItem: Item) => {
  console.log(`add Item`, newItem)
  items.value.push(newItem)
}

export const removeItem = (removeIdx: number) => {
  console.log(`remove Item at`, removeIdx)
  items.value.splice(removeIdx, 1)
}