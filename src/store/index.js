import { configureStore } from '@reduxjs/toolkit'

import products from './reducers/products';
import category from './reducers/category';
import cart from './reducers/cart';
import views from './reducers/views';

//combine all of the reducers into a single reducer with combineReducers()
const store = configureStore({
  reducer: {
    products, 
    category,
    cart,
    views
  }
})

//create the store and export
export default store;
