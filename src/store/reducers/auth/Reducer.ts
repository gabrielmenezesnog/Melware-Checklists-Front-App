import {Reducer} from '@reduxjs/toolkit';

// ActionTypes
import {authActionTypes} from './ActionTypes';

// Interfaces
import {AuthState} from '../../../interface/user/iAuthTypes';

const initialState: AuthState = {
  user: null,
  response: null,
  loggedIn: false,
  loading: null,
  error: null,
  message: null,
};

export const AuthReducer: Reducer<AuthState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN_USER:
      return Object.assign({}, state, {
        user: action.payload.user,
        message: null,
      });

    case authActionTypes.SUCCESSFUL_SIGN_IN:
      return Object.assign({}, state, {
        response: action.payload,
        loggedIn: true,
      });

    case authActionTypes.SIGN_IN_FAIL:
      return Object.assign({}, state, {
        loggedIn: false,
        message: action.payload.message,
      });

    case authActionTypes.LOGGED_OUT:
      return Object.assign({}, state, initialState);

    case authActionTypes.SIGN_UP_USER:
      return Object.assign({}, state, {
        response: action.payload,
        message: null,
      });

    case authActionTypes.SUCCESSFUL_SIGN_UP:
      return Object.assign({}, state, {
        response: action.payload,
        loggedIn: true,
        message: null,
      });

    case authActionTypes.SIGN_UP_FAIL:
      return Object.assign({}, state, {
        loggedIn: false,
        message: action.payload.message,
      });

    case authActionTypes.CLEAR_ERROR_MESSAGE:
      return Object.assign({}, state, {
        message: null,
      });

    default:
      return state;
  }
};
export default AuthReducer;
