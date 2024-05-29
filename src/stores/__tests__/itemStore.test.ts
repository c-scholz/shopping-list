import type { Item } from "@/settings/types"
import { describe, it, expect } from "vitest"
import { useLists } from "@/stores/listStore"

describe('item store', () => {

  const mockItemA: Item = {
    id: 'abc-123-def-456',
    checked: false,
    name: 'Lachscarpaccio',
    amount: '300g'
  }
  const mockItemB: Item = {
    id: 'ghi-321-jkl-654',
    checked: true,
    name: 'Safran',
  }

  const { items, addItem, removeItem } = useLists()

  it('adds item', () => {
    expect(items.value).toHaveLength(0)
    addItem(mockItemA)
    addItem(mockItemB)
    expect(items.value[0].name).toBe(mockItemA.name)
    expect(items.value[1].amount).toBeUndefined()
  })

  it('removes item', () => {
    expect(items.value).toHaveLength(2)
    removeItem(0)
    // removed mockItemA so now mockItemB should be in index 0
    expect(items.value[0].id).toEqual(mockItemB.id)
  })

  it('updates localstorage', () => {
    const parsedData = JSON.parse(localStorage.getItem('items') || '[]')
    // mockItemB should also be in index 0 in localStorage
    expect(parsedData[0].id).toEqual(mockItemB.id)
  })

})
