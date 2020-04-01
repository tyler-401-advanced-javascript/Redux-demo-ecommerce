
const initialState = {
  candidates: [
    { name: 'Tyler', votes: 0 },
    { name: 'Cait', votes: 0 },
    { name: 'Susanna', votes: 0 },
    { name: 'Eugene', votes: 0 },
    { name: 'Ada', votes: 0 },
    { name: 'Andrew', votes: 0 },
    { name: 'Peter', votes: 0 },
    { name: 'Kevin', votes: 0 },
    { name: 'Adrian', votes: 0 }
  ],
  totalVotes: 0
};

//all reducers take in a STATE and an ACTION
//state is { canditdates: [], totalVotes: number }
// we need to return the new state.
export default function voteCounter(state = initialState, action) {
  //usually seen with a switch casse, switching on the action..
  switch(action.type) {
    case 'INCREMENT':
      return { candidates: changeCandidateVotes(state, action, 1), totalVotes: state.totalVotes + 1 }
    case 'DECREMENT':
      return { candidates: changeCandidateVotes(state, action, -1), totalVotes: state.totalVotes + 1 }
    case 'RESET': 
      return initialState;
    default: 
      return state;
  }
}

function changeCandidateVotes(state, action, byHowMuch) {
  return state.candidates.map(person => {
    return person.name === action.payload ? {...person, votes: person.votes + byHowMuch } : person;
  })
}

//exports various action creators.

export function increment(name) {
  return { type: 'INCREMENT', payload: name }
}

export function decrement(name) {
  return { type: 'DECREMENT', payload: name }
}

export function reset() {
  return { type: 'RESET' }
}