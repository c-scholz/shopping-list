export type Item = {
  id: string
  checked: boolean
  name: string
  amount?: number
  unit?: string
}

export type List = {
  name: string
  dueDate?: Date
}