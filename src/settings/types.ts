export type Item = {
  id: string
  checked: boolean
  name: string
  amount?: string
}

export type List = {
  name: string
  dueDate?: Date
}