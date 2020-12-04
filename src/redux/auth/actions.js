import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../actions';

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});
export const loginUserSuccess = (user, userDetails) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { user, userDetails }
});
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message }
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history }
})
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user
})
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message }
})

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history }
});