import { defineStore } from 'pinia'
import { type Item, type List } from '@/settings/types'
import { computed, ref } from 'vue'

export const useLists = defineStore('lists', () => {
  const lists = ref<List[]>([])

  const sortedLists = computed(() => [...lists.value].sort((listA, listB) => {
    if (listA.dueDate === undefined) {
      return 1
    }
    if (listB.dueDate === undefined) {
      return -1
    }
    return listA.dueDate.getTime() - listB.dueDate.getTime()
  }))

  const addList = (newList: List) => {
    lists.value.push(newList)
  }

  const removeList = (removeList: List) => {
    const removeIdx = lists.value.findIndex(list => list.id === removeList.id)
    lists.value.splice(removeIdx, 1)
  }

  const updateList = (updatedList: List) => {
    const updateIdx = lists.value.findIndex(list => list.id === updatedList.id)
    lists.value[updateIdx] = updatedList
  }

  const addItem = (newItem: Item, updateList: List) => {
    console.log([...lists.value], updateList)
    const updateIdx = lists.value.findIndex(list => list.id === updateList.id)
    lists.value[updateIdx]?.items.push(newItem)
  }

  const removeItem = (removeItem: Item, updateList: List) => {
    console.log(lists)
    const updateListIdx = lists.value.findIndex(list => list.id === updateList.id)
    const updateItemIdx = lists.value[updateListIdx]?.items.findIndex(item => item.id === removeItem.id)
    lists.value[updateListIdx].items.splice(updateItemIdx, 1)
  }

  const updateItem = (updatedItem: Item) => {

  }

  return { lists, sortedLists, addList, removeList, updateList, addItem, removeItem, updateItem }
})