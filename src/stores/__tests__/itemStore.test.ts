import type { Item } from "@/settings/types"
import { beforeEach, describe, it, expect } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useLists } from "@/stores/listStore"

describe('item store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

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

  it('adds item', () => {
    const { items, addItem } = useLists()
    expect(items).toHaveLength(0)
    addItem(mockItemA)
    addItem(mockItemB)
    expect(items[0].name).toBe(mockItemA.name)
    expect(items[1].amount).toBeUndefined()
  })

  it('removes item')

})
