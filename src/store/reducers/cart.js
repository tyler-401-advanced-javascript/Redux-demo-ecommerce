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

      const inCart = state.items.find(item => item._id === action.payload.item._id);

      if (inCart) {
        const newItems = state.items.map(item => {
          return item._id === action.payload.item._id
            ? { ...item, number: item.number + action.payload.number }
            : item;
        });

        //return the new state
        const newState = {
          totalItems: state.totalItems + action.payload.number,
          items: newItems
        };
        console.log(newState);
        return newState;

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
    case 'UPDATE_CART_ITEM':
      const newItems = state.items.map(item => {
        return item.id === action.payload.item.id
          ? { ...item, number: action.payload.number }
          : item ;
      });
      const newTotal = newItems.reduce((acc, item, i) => {
        acc += item.number;
        return acc;
      }, 0);
      console.log({ newItems, newTotal } );
      return { items: newItems, totalItems: newTotal };

    case 'EMPTY_CART':
      return initialState;
    default:
      return state;
  }
}
