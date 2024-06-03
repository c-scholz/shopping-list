export type Item = {
  id: string
  amount?: number
  checked: boolean
  name: string
  unit?: string
}

export type List = {
  id: string
  dueDate?: Date,
  items: Array<Item>,
  name: string
}