export const Views = {
  MAIN: 'MAIN',
  CART: 'CART'
};

export default function viewReducer(state = Views.MAIN, action) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return Views[action.payload];
    default:
      return state;
  }
}
