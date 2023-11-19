import {call, put, takeLatest} from 'redux-saga/effects';
import {userActionTypes} from '../reducers/auth/ActionTypes';
import {UserActions} from '../reducers/auth/Actions';

import {signUp} from '../../services/api/auth/User';

function* cadastrar(action: any): any {
  try {
    const response = yield call(signUp, action.payload.user);
    yield put(UserActions.successfulSignUp({user: response, loggedIn: true}));
  } catch (error: any) {
    yield put(
      UserActions.signUpFail({
        loggedIn: false,
      }),
    );
  }
}

function* logout() {
  yield put({type: userActionTypes.LOGGED_OUT});
}

export function* authSaga() {
  yield takeLatest(userActionTypes.SIGN_UP_USER, cadastrar);
  yield takeLatest(userActionTypes.LOGGED_OUT, logout);
}
