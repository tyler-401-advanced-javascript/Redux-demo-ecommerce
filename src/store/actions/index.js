export function changeCategory(category) {
  return { type: 'CHANGE_CATEGORY', category };
}

export function createItem(item) {
  return { type: 'ADD', payload: item };
}

export function deleteItem(item) {
  return { type: 'DELETE', payload: item };
}

export function changeStock(item) {
  //item {name: someName, newStock: 39739}
  return { type: 'CHANGE_STOCK', payload: { ...item } };
}
