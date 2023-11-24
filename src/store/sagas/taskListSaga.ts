import {call, put, takeLatest} from 'redux-saga/effects';
import {taskListActionTypes} from '../reducers/taskList/getAllByUserId/ActionTypes';
import {TaskListActions} from '../reducers/taskList/getAllByUserId/Actions';

import {getAllByUserId} from '../../services/api/taskList/TaskList';

function* getListsByUserId(action: any): any {
  try {
    const response = yield call(
      getAllByUserId,
      action.payload.userId,
      action.payload.token,
    );
    yield put(TaskListActions.getTaskListsSuccess({response: response}));
  } catch (error: any) {
    yield put(
      TaskListActions.getTaskListsError({
        message: error,
      }),
    );
  }
}

export function* taskListSaga() {
  yield takeLatest(taskListActionTypes.TASK_LISTS_REQUEST, getListsByUserId);
}
