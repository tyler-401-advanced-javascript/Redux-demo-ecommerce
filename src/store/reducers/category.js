export const CategoryList = {
  Filter: {
    TOOL: 'TOOL',
    PERSON: 'PERSON',
    TOY: 'TOY',
    ALL: 'ALL'
  },
  Current: 'ALL',
}


export default function category(state = CategoryList.Current, action) {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return action.category
    default: 
      return state
  }
}
