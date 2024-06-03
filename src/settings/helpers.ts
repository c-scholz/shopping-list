export const renderDate = (dueDate?: Date) => {
  if (dueDate === undefined) {
    return
  }
  return new Date(dueDate)
    .toLocaleDateString('en-EN', {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
      year: 'numeric',
    })
}