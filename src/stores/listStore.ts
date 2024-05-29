import { type Item, type List } from '@/settings/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLists = defineStore(
  'lists',
  () => {
    const list = ref<List>({ name: 'Shopping List', dueDate: undefined })

    const items = ref<Item[]>([])

    const addItem = (newItem: Item) => {
      items.value.push(newItem)
    }

    const removeItem = (removeItem: Item) => {
      const updateItemIdx = items.value.findIndex(item => item.id === removeItem.id)
      items.value.splice(updateItemIdx, 1)
    }

    return { items, list, addItem, removeItem }
  },
  {
    persist: true
  }
)