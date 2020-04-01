import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './reducers/products'
import category from './reducers/category'

//combine all of the reducers into a single reducer with combineReducers()
const reducers = combineReducers({ products, category /**Some more reducers here */ });

//create the store and export
export default createStore(reducers, composeWithDevTools());