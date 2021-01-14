const { LOGIN, LOGOUT } = require("store/actions/user-actions");

/**
 * When the user is logged in, the state is:
 * 
 * {
 *    isLoggedIn: true,
 *    email: 'user@email.com'
 *    name: 'user name',
 *    surname: 'user surname',
 *    lastLogin: 2342423234,
 * }
 */

const initialUserState = {
  isLoggedIn: false
}

function userReducer(state = initialUserState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case LOGIN:
      return {
        ...state,
        ...payload.user
      }

    case LOGOUT:
      return initialUserState;

    default:
      return state;
  }
}

export default userReducer;
