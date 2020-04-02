const initialState = {
  loggedIn: false,
  user: {}
}

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      console.log('logged in successfully!');
      return { loggedIn: true, user: action.payload };
    case 'LOG_OUT':
      return initialState;
    case 'LOG_IN_ERROR':
      // do nothing at the moment. 
      console.error('error with the login', action.payload);
      return state;
    case 'FAILED_LOG_IN':
      // do nothing at the moment. 
      console.error('failed log in', action.payload);
      return state;
    default:
      return state;
  }
}