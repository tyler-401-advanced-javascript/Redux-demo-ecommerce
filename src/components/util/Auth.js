//glorified If
import { connect } from 'react-redux';

function Auth({ auth, required, children}) {
  let verified = true;
  //if there is a stipulated permission, check to see if the logged-in user has those permissions. 
  if (required) {
    verified = auth.loggedIn && auth.user.role.permissions.includes(required)
  }
  return verified ? children : null;
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, null)(Auth)