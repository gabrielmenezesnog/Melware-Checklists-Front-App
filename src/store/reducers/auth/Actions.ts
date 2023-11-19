import {userActionTypes} from './ActionTypes';

export const UserActions = {
  loginUser: (payload: any) => ({
    type: userActionTypes.LOGIN_USER,
    payload,
  }),

  signInFail: (payload: any) => ({
    type: userActionTypes.SIGN_IN_FAIL,
    payload: payload,
  }),

  successfulLogin: (payload: any) => ({
    type: userActionTypes.SUCCESSFUL_LOGIN,
    payload,
  }),

  loggedOut: () => ({
    type: userActionTypes.LOGGED_OUT,
  }),

  signUpUser: (payload: any) => ({
    type: userActionTypes.SIGN_UP_USER,
    payload,
  }),

  successfulSignUp: (payload: any) => ({
    type: userActionTypes.SUCCESSFUL_SIGN_UP,
    payload,
  }),

  signUpFail: (payload: any) => ({
    type: userActionTypes.SIGN_UP_FAIL,
    payload: payload,
  }),
};
