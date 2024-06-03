import { describe, it, expect } from 'vitest'
import type { Item, List } from '@/settings/types'
import { useLists } from '@/stores/listStore'

describe('item store', () => {
  const mockList: List = {
    id: 'a1g-b33-agz',
    items: [],
    name: 'Rewe',
    dueDate: new Date(),
  }

  const mockItemA: Item = {
    id: 'abc-123-def-456',
    checked: false,
    name: 'Lachsfilet',
    amount: 300,
    unit: 'g'
  }
  const mockItemB: Item = {
    id: 'ghi-321-jkl-654',
    checked: true,
    name: 'Safran',
  }

  const { lists, addList, addItem, removeItem } = useLists()

  it('adds list', () => {
    addList(mockList)
    expect(lists.value).toHaveLength(1)
  })

  it('adds item', () => {
    expect(lists.value[0].items).toHaveLength(0)
    addItem(mockItemA, mockList.id)
    addItem(mockItemB, mockList.id)
    expect(lists.value[0].items[0].name).toBe(mockItemA.name)
    expect(lists.value[0].items[1].amount).toBeUndefined()
  })

  it('removes item', () => {
    expect(lists.value[0].items).toHaveLength(2)
    removeItem(mockItemA.id, mockList.id)
    // removed mockItemA so now mockItemB should be in index 0
    expect(lists.value[0].items[0].id).toEqual(mockItemB.id)
  })

  it('updates localstorage', () => {
    const parsedData = JSON.parse(localStorage.getItem('lists') || '[]')
    // mockItemB should also be in index 0 in localStorage
    expect(parsedData[0].items[0].id).toEqual(mockItemB.id)
  })

})
