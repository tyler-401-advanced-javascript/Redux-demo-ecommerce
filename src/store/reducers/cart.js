const initialState = {
  totalItems: 0,
  items: [
    //{...<ref to Item>, number: number}
  ]
};

//payload { item: <itemObj>, number: number }
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      //if the item is already in the cart, add that item's number

      const inCart = state.items.find(item => item.id === action.payload.item.id);

      if (inCart) {
        const newItems = [...state.items].map(item => {
          if (item.id === action.payload.item.id) {
            item.number += action.payload.number
          }
          return item
        })
        
        //return the new state
        return { totalItems: state.totalItems + action.payload.number, items: newItems };

        //else if the item is not in the cart..
      } else {
        return {
          totalItems: state.totalItems + action.payload.number,
          items: [
            ...state.items,
            { ...action.payload.item, number: action.payload.number }
          ]
        };
      }
    case 'DELETE_CART_ITEM':
      return {
        items: state.items.filter(item => item.name !== action.payload.name),
        totalItems: state.totalItems - action.payload.number
      };

    case 'EMPTY_CART':
      return initialState;
    default:
      return state;
  }
}
