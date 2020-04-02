import { SECRET } from '../../config/constants'
import jwt from 'jsonwebtoken'

export default function verifyResponse(response, dispatch) {
  //if token, verify and log them in . If not, fail log in.
  if (response.token) {
    const user = jwt.verify(response.token, SECRET);
    if (user) dispatch(userLogin(user, response.token));
    return;
  }
  dispatch(userFailLogIn(response))
}

function userFailLogIn(response) {
  return { type: 'FAILED_LOG_IN', payload: response }
}

function userLogin(user, token) {
  return { type: 'LOG_IN', payload: {...user, token} }
}