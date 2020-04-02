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
  return { type: 'CHANGE_STOCK', payload: item };
}

export function addCartItem(item, number) {
  return { type: 'ADD_CART_ITEM', payload: { item, number } }
}

export function deleteCartItem(item) {
  return { type: 'DELETE_CART_ITEM', payload: item }
}

export function emptyCart() {
  return { type: 'EMPTY_CART', payload: null }
}

export function changeView(view) {
  return { type: 'CHANGE_VIEW', payload: view}
}