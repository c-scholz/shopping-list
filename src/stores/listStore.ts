import { type Item, type List } from '@/settings/types'
import { ref, watch } from 'vue'

const getDefaultList = () => {
  const parsedList = JSON.parse(localStorage.getItem('list') ?? '{"name": "Unnamed List"}')
  parsedList.dueDate = new Date(parsedList.dueDate ?? new Date)
  return parsedList
}

const list = ref<List>(getDefaultList())

const items = ref<Item[]>(JSON.parse(localStorage.getItem('items') ?? '[]'))

export const useLists = () => {
  const addItem = (newItem: Item) => {
    items.value.push(newItem)
  }

  const removeItem = (removeItemIdx: number) => {
    items.value.splice(removeItemIdx, 1)
  }

  return { items, list, addItem, removeItem }
}


watch(list, (newList) => {
  console.log('updated list')
  localStorage.setItem('list', JSON.stringify(newList))
}, { deep: true })

watch(items, (newItems) => {
  console.log('updated items')
  localStorage.setItem('items', JSON.stringify(newItems))
}, { deep: true })