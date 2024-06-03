import { computed, ref, watch } from 'vue'
import { type Item, type List } from '@/settings/types'

const getParsedLists = () => {
  const parsedLists = JSON.parse(localStorage.getItem('lists') ?? '[]') as List[]

  parsedLists.forEach(parsedList => {
    if (parsedList.dueDate !== undefined) {
      parsedList.dueDate = new Date(parsedList.dueDate)
    }
  })

  return parsedLists
}

const lists = ref<List[]>(getParsedLists())

const sortedLists = computed(() => lists.value.sort((listA, listB) => {
  if (listA.dueDate === undefined) {
    return 1
  }
  if (listB.dueDate === undefined) {
    return -1
  }
  return listA.dueDate.getTime() - listB.dueDate.getTime()
}))

const getListIndex = (listId: string) => lists.value.findIndex(list => list.id === listId)


export const useLists = () => {
  const addList = (newList: List) => {
    lists.value.push(newList)
  }

  const removeList = (listId: string) => {
    const listIdx = getListIndex(listId)
    lists.value.splice(listIdx, 1)
  }

  const addItem = (newItem: Item, listId: string) => {
    const listIdx = getListIndex(listId)
    lists.value[listIdx]?.items.push(newItem)
  }

  const removeItem = (itemId: string, listId: string) => {
    const listIdx = getListIndex(listId)
    const itemIdx = lists.value[listIdx].items.findIndex(item => item.id === itemId)
    lists.value[listIdx]?.items.splice(itemIdx, 1)
  }

  return { lists, sortedLists, addList, removeList, addItem, removeItem }
}


watch(lists, (newList) => {
  localStorage.setItem('lists', JSON.stringify(newList))
}, { deep: true })