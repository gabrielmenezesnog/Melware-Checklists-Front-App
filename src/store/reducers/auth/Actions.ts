import {authActionTypes} from './ActionTypes';

export const AuthActions = {
  signIn: (payload: any) => ({
    type: authActionTypes.SIGN_IN_USER,
    payload,
  }),

  signInFail: (payload: any) => ({
    type: authActionTypes.SIGN_IN_FAIL,
    payload: payload,
  }),

  successfulSignIn: (payload: any) => ({
    type: authActionTypes.SUCCESSFUL_SIGN_IN,
    payload,
  }),

  loggedOut: () => ({
    type: authActionTypes.LOGGED_OUT,
  }),

  signUpUser: (payload: any) => ({
    type: authActionTypes.SIGN_UP_USER,
    payload,
  }),

  successfulSignUp: (payload: any) => ({
    type: authActionTypes.SUCCESSFUL_SIGN_UP,
    payload,
  }),

  signUpFail: (payload: any) => ({
    type: authActionTypes.SIGN_UP_FAIL,
    payload: payload,
  }),

  clearErrorMessage: () => ({
    type: authActionTypes.CLEAR_ERROR_MESSAGE,
  }),
};
