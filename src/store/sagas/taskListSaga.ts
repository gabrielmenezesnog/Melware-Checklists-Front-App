import {call, put, takeLatest} from 'redux-saga/effects';
import {taskListActionTypes} from '../reducers/taskList/ActionTypes';
import {TaskListActions} from '../reducers/taskList/Actions';

import {taskListService} from '../../services/api/taskList/task-list-service';

function* getListsByUserId(action: any): any {
  try {
    const response = yield call(
      taskListService.getAllByUserId,
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

function* updateTaskListById(action: any): any {
  try {
    const response = yield call(
      taskListService.updateTaskListById,
      action.payload.taskListId,
      action.payload.taskList,
      action.payload.token,
    );
    yield put(TaskListActions.updateTaskListSuccess({response: response}));
  } catch (error: any) {
    yield put(
      TaskListActions.updateTaskListError({
        message: error,
      }),
    );
  }
}

function* deleteTaskListById(action: any): any {
  try {
    const response = yield call(
      taskListService.deleteTaskListById,
      action.payload.taskListId,
      action.payload.token,
    );
    yield put(TaskListActions.deleteTaskListSuccess({response: response}));
  } catch (error: any) {
    yield put(
      TaskListActions.deleteTaskListError({
        message: error,
      }),
    );
  }
}

export function* taskListSaga() {
  yield takeLatest(taskListActionTypes.TASK_LISTS_REQUEST, getListsByUserId);
  yield takeLatest(
    taskListActionTypes.UPDATE_TASK_LIST_REQUEST,
    updateTaskListById,
  );
  yield takeLatest(
    taskListActionTypes.DELETE_TASK_LIST_REQUEST,
    deleteTaskListById,
  );
}
