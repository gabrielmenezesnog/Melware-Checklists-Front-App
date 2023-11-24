import {all, fork} from 'redux-saga/effects';

import {authSaga} from './sagas/authSaga';
import {taskListSaga} from './sagas/taskListSaga';

export function* rootSaga() {
  yield all([fork(authSaga), fork(taskListSaga)]);
}
