import axios from 'axios';
import { saveToLocalStorage, getFromLocalStorage, deleteFromLocalStorage } from 'utils/storage/localStorage';

// Actions
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHECK_SESSION_FAILED = 'CHECK_SESSION_FAILED';

// Action creators
export const login = (user) => async(dispatch) => {
  try {
    const { data: loginResponse } = await axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, {
      email: user.email,
      password: user.password
    });

    saveToLocalStorage('pwa-bbva-user', {
      userLoggedIn: true,
      email: loginResponse.data.email,
      name: loginResponse.data.name,
      surname: loginResponse.data.surname
    });

    dispatch({
      type: LOGIN,
      payload: { user: loginResponse.data }
    })
  } catch (err) {
    
  }
};

export const logout = () => {
  deleteFromLocalStorage('pwa-bbva-user');

  return {
    type: LOGOUT
  }
};

export const checkSession = () => {
  const loggedInUser = getFromLocalStorage('pwa-bbva-user');

  if (loggedInUser) {
    return {
      type: LOGIN,
      payload: loggedInUser
    }
  }

  return {
    type: CHECK_SESSION_FAILED
  }
}
