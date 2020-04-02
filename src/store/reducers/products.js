import { CategoryList } from './category';
import uniqid from 'uniqid';

//{ id: uniqid(), name: 'Tyler', displayCategory: 'Person', category: Filter.PERSON, price: 55, description: 'string', stock: 5},
const initialState = [
  {
    id: 1,
    name: 'Tyler',
    displayCategory: 'Person',
    category: CategoryList.Filter.PERSON,
    price: 55,
    description: 'software developer with well developed chihuahua complex',
    stock: 5
  },
  {
    id: 2,
    name: 'Andrew',
    displayCategory: 'Person',
    category: CategoryList.Filter.PERSON,
    price: 65,
    description: 'software developer with Donkey Kong coffee mug',
    stock: 5
  },
  {
    id: 3,
    name: 'Cait',
    displayCategory: 'Person',
    category: CategoryList.Filter.PERSON,
    price: 105,
    description: 'Exceptional networking skills, software developer',
    stock: 5
  },
  {
    id: 4,
    name: 'Fred',
    displayCategory: 'Person',
    category: CategoryList.Filter.PERSON,
    price: 5,
    description: 'anonymous internet troll',
    stock: 5
  },
  {
    id: 5,
    name: 'Red',
    displayCategory: 'Person',
    category: CategoryList.Filter.PERSON,
    price: 5,
    description: 'dog posing as a person',
    stock: 5
  },
  {
    id: 6,
    name: 'Fisbee',
    displayCategory: 'Toy',
    category: CategoryList.Filter.TOY,
    price: 1,
    description: 'Chinese knockoff of a Frisbee',
    stock: 5
  },
  {
    id: 7,
    name: 'Ball',
    displayCategory: 'Toy',
    category: CategoryList.Filter.TOY,
    price: 2,
    description: 'round. Bouncy.',
    stock: 5
  },
  {
    id: 8,
    name: 'Computer',
    displayCategory: 'Toy',
    category: CategoryList.Filter.TOY,
    price: 100,
    description: 'This seems useful but were not sure yet',
    stock: 5
  },
  {
    id: 9,
    name: 'Stick',
    displayCategory: 'Toy',
    category: CategoryList.Filter.TOY,
    price: 0.5,
    description: 'Were super sure this is useful',
    stock: 5
  },
  {
    id: 10,
    name: 'Tile Saw',
    displayCategory: 'Tool',
    category: CategoryList.Filter.TOOL,
    price: 50,
    description: 'For making giant bananagrams',
    stock: 5
  },
  {
    id: 11,
    name: 'Mitre Box',
    displayCategory: 'Tool',
    category: CategoryList.Filter.TOOL,
    price: 50,
    description: 'cuts Angular pieces',
    stock: 5
  },
  {
    id: 12,
    name: 'Framing Square',
    displayCategory: 'Tool',
    category: CategoryList.Filter.TOOL,
    price: 5,
    description: 'sBetter than not square',
    stock: 5
  },
  {
    id: 13,
    name: 'React',
    displayCategory: 'Tool',
    category: CategoryList.Filter.TOOL,
    price: 0,
    description: 'Computer not included',
    stock: 5
  },
  {
    id: 14,
    name: 'Tylers Brother',
    displayCategory: 'Tool',
    category: CategoryList.Filter.TOOL,
    price: 0,
    description: 'No refunds',
    stock: 5
  },
  {
    id: 15,
    name: 'Slide Hammer',
    displayCategory: 'Tool',
    category: CategoryList.Filter.TOOL,
    price: 0.5,
    description: 'MC Hammer`s less intelligent cousin',
    stock: 900
  }
];

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload, id: uniqid() }];
    case 'DELETE':
      return state.filter(item => item.id !== action.payload.id);
    case 'CHANGE_STOCK':
      const newState = state.map(item => {
        if (item.id === action.payload.item.id) {
          console.log('found item to update...', item);
          item.stock = action.payload.newStock;
        }
        return item;
      });
      console.log(newState, 'new state');
      return newState;
    default:
      return state;
  }
 }
