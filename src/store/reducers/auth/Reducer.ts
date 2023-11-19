import {Reducer} from '@reduxjs/toolkit';

// ActionTypes
import {userActionTypes} from './ActionTypes';

// Interfaces
import {AuthState} from '../../../interfaces/user/iAuthTypes';

const initialState: AuthState = {
  response: null,
  loggedIn: false,
  loading: null,
  error: null,
};

export const UserReducer: Reducer<AuthState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case userActionTypes.LOGIN_USER:
      return Object.assign({}, state, {
        response: action.payload,
      });

    case userActionTypes.SUCCESSFUL_LOGIN:
      return Object.assign({}, state, {
        response: action.payload,
        loggedIn: true,
      });

    case userActionTypes.SIGN_IN_FAIL:
      return Object.assign({}, state, {
        loggedIn: false,
      });

    case userActionTypes.LOGGED_OUT:
      return Object.assign({}, state, initialState);

    case userActionTypes.SIGN_UP_USER:
      return Object.assign({}, state, {
        response: action.payload,
      });

    case userActionTypes.SUCCESSFUL_SIGN_UP:
      return Object.assign({}, state, {
        response: action.payload,
        loggedIn: true,
      });

    case userActionTypes.SIGN_UP_FAIL:
      return Object.assign({}, state, {
        loggedIn: false,
      });

    default:
      return state;
  }
};
export default UserReducer;
