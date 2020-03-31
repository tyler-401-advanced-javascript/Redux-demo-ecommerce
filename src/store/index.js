import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import voteCounter from './voteCounter';
import categoryFilterer from './categoryFilterer'

//combine all of the reducers into a single reducer with combineReducers()
const reducers = combineReducers({ voteCounter, categoryFilterer /**Some more reducers here */ });

export default createStore(reducers, composeWithDevTools());