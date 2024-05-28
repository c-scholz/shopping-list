export type Item = {
  id: string,
  checked: boolean;
  name: string;
  amount?: string;
}

export type List = {
  id: string,
  name: string,
  items: Item[],
  dueDate?: Date,
}