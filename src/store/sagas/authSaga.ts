import {call, put, takeLatest} from 'redux-saga/effects';
import {authActionTypes} from '../reducers/auth/ActionTypes';
import {AuthActions} from '../reducers/auth/Actions';

import {signIn} from '../../services/api/auth/Auth';

function* signInUser(action: any): any {
  try {
    const response = yield call(signIn, action.payload.user);
    yield put(
      AuthActions.successfulSignIn({response: response, loggedIn: true}),
    );
  } catch (error: any) {

    yield put(
      AuthActions.signInFail({
        loggedIn: false,
        message: error,
      }),
    );
  }
}

export function* authSaga() {
  yield takeLatest(authActionTypes.SIGN_IN_USER, signInUser);
}
