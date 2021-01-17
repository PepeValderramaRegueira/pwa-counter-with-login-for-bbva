import axios from 'axios';
import {
  saveToLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage
} from 'utils/storage/localStorage';

// Actions
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHECK_SESSION_FAILED = 'CHECK_SESSION_FAILED';

// Action creators
/**
 * If the user data is correct, logs him into the application.
 * Also saves the response to the localStorage to storage the user's session.
 * 
 * @param { object } user - User to log in the application.
 */
export const login = (user) => async(dispatch) => {
  try {
    const LOGIN_REQUEST_URL = `${process.env.REACT_APP_SERVER}/auth/login`;
    const { data: loginResponse } = await axios.post(LOGIN_REQUEST_URL, {
      email: user.email,
      password: user.password
    });

    console.log('respuesta del server', loginResponse);
    console.log('lo que salvamos', {
      userLoggedIn: true,
      email: loginResponse.data.email,
      name: loginResponse.data.name,
      surname: loginResponse.data.surname,
      lastLogin: loginResponse.data.lastLogin
    });

    saveToLocalStorage('pwa-bbva-user', {
      userLoggedIn: true,
      email: loginResponse.data.email,
      name: loginResponse.data.name,
      surname: loginResponse.data.surname,
      lastLogin: loginResponse.data.lastLogin
    });

    dispatch({
      type: LOGIN,
      payload: { user: loginResponse.data }
    });
  } catch (error) {
    console.error('Login error', error);
  }
};

/**
 * Logs the user out making a request to the server and deleting the session
 * data from the localStorage.
 * 
 * @param { string } userId - User id to log him out. 
 */
export const logout = (userId) => async(dispatch) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER}/auth/logout`, {
      _id: userId
    });

    deleteFromLocalStorage('pwa-bbva-user');

    dispatch({
      type: LOGOUT
    });
  } catch(error) {

  }
};

/**
 * Checks if the user is currently logged in.
 */
export const checkSession = () => {
  const loggedInUser = getFromLocalStorage('pwa-bbva-user');

  if (loggedInUser) {
    return {
      type: LOGIN,
      payload: {
        user: loggedInUser
      }
    }
  }

  return {
    type: CHECK_SESSION_FAILED
  }
}
