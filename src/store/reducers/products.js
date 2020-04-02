

//{ _id: <id from mongo> name: 'Tyler', displayCategory: 'Person', category: Filter.PERSON, price: 55, description: 'string', stock: 5},
const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return action.payload
    case 'ADD':
      return [...state, { ...action.payload }];
    case 'DELETE':
      return state.filter(item => item._id !== action.payload._id);
    case 'CHANGE_STOCK':
      const newState = state.map(item => {
        if (item._id === action.payload.item._id) {
          console.log('found item to update...', item);
          return { ...item, stock: action.payload.newStock }
        } else {
          return item;
        }
      });
      return newState;
    default:
      return state;
  }
 }
