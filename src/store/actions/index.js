import { productsURL } from '../../config/constants'
import verifyResponse from './verifyServerResponse';


export function changeCategory(category) {
  return { type: 'CHANGE_CATEGORY', category };
}

export function getAllProducts() {
  return async function (dispatch) {
    const raw = await fetch(productsURL)
    const response = await raw.json();
    dispatch(generateAllProductsAction(response))
  }
}

function generateAllProductsAction(data) {
  return { type: 'GET_ALL_PRODUCTS', payload: data }
}


export function createItem(item, token) {
  return async function (dispatch) {
    console.log('token and data', item, token);
    const raw = await fetch(productsURL, {
      method: 'post',
      headers: {
        //todo: Same here.. Blocked by cors policy. No good .
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: {...item}
    })
    const response = await raw.json()

    //dispatch two actions.
    dispatch(createItemAction(response.content))
    dispatch(verifyResponse(response))
  }
}

function createItemAction(item) {
  return { type: 'ADD', payload: item };
}

export function deleteItem(item) {
  return { type: 'DELETE', payload: item };
}

export function changeStock(data) {
  //item {name: someName, newStock: 39739}
  return async function(dispatch) {
    const { item, newStock, token } = data;
    const raw = await fetch(productsURL, {
      //todo: why is cors such a POS? This is busted. 
      method: 'put',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: {
        id: item._id,
        newStock: newStock,
      }
    })
    const response = await raw.json();
    console.log('response from put requrest', response);
    dispatch(changeStockAction(response.content))
    dispatch(verifyResponse(response))
  }
}

function changeStockAction(data) {
  return { type: 'CHANGE_STOCK', payload: data };
}


export function addCartItem(item, number) {
  return { type: 'ADD_CART_ITEM', payload: { item, number } };
}

export function deleteCartItem(item) {
  return { type: 'DELETE_CART_ITEM', payload: item };
}

export function updateCartItem(item, number) {
  if (number <=0) return { type: 'DELETE_CART_ITEM', payload: item }
  else return { type: 'UPDATE_CART_ITEM', payload: { item, number } };
}

export function emptyCart() {
  return { type: 'EMPTY_CART', payload: null };
}

export function changeView(view) {
  return { type: 'CHANGE_VIEW', payload: view };
}

