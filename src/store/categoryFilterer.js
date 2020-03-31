
export const Filter = {
  TOOL: 'TOOL',
  PERSON: 'PERSON',
  TOY: 'TOY',
  ALL: 'ALL'
}

const initialState = {
  products: [
    { name: 'Tyler', category: Filter.PERSON, price: 55, description: 'super juicy descriptoin', stock: 5},
    { name: 'Andrew', category: Filter.PERSON, price: 65, description: 'super juicy descriptoin', stock: 5},
    { name: 'Cait', category: Filter.PERSON, price: 105, description: 'super juicy descriptoin', stock: 5},
    { name: 'Fred', category: Filter.PERSON, price: 5, description: 'super juicy descriptoin', stock: 5},
    { name: 'Red', category: Filter.PERSON, price: 5, description: 'super juicy descriptoin', stock: 5},
    { name: 'Fisbee', category: Filter.TOY, price: 1, description: 'super juicy descriptoin', stock: 5},
    { name: 'Ball', category: Filter.TOY, price: 2, description: 'super juicy descriptoin', stock: 5},
    { name: 'Computer', category: Filter.TOY, price: 100, description: 'super juicy descriptoin', stock: 5},
    { name: 'Stick', category: Filter.TOY, price: 0.5, description: 'super juicy descriptoin', stock: 5},
    { name: 'Tile Saw', category: Filter.TOOL, price: 50, description: 'super juicy descriptoin', stock: 5},
    { name: 'Mitre Box', category: Filter.TOOL, price: 50, description: 'super juicy descriptoin', stock: 5},
    { name: 'Framing Square', category: Filter.TOOL, price: 5, description: 'super juicy descriptoin', stock: 5},
    { name: 'React', category: Filter.TOOL, price: 0, description: 'super juicy descriptoin', stock: 5},
    { name: 'Tylers Brother', category: Filter.TOOL, price: 0, description: 'super juicy descriptoin', stock: 5},
    { name: 'Slide Hammer', category: Filter.TOOL, price: 0.5, description: 'super bad description! ', stock: 900}
  ],
  /** and more state things here. */
}

export default function categoryFilterer(state = initialState, action) {
  switch(action.type) {
    case 'FILTER':
      if (action.payload === Filter.ALL) return initialState
      return { products: initialState.products.filter( item => item.category === action.payload ) /** and other state things too */}
    default: 
      return state;
  }
}

export function filterBy(filter) {
  return { type: 'FILTER', payload: filter}
}
