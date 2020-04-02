import { SigninURL } from '../../config/constants'
import verifyResponse from './verifyServerResponse'

export function login(username, password) {
  return async function (dispatch) {
    const base64String = btoa(`${username}:${password}`)

    try {
      //make the request.
      const raw = await fetch(SigninURL, {
        method: 'post',
        headers: {
          'Authorization': `Basic ${base64String}`
        },
      })
      const response = await raw.json();

      //imported from adjacent file;
      await verifyResponse(response, dispatch);
        //this is our defacto 'return' statement.
    } catch (err) {
      dispatch(errorScreen(err))
    }
  }
}

function errorScreen(err) {
  return { type: 'LOG_IN_ERROR', payload: err }
}

export function logout() {
  return { type: 'LOG_OUT' }
}