import {Reducer} from '@reduxjs/toolkit';

// ActionTypes
import {taskListActionTypes} from './ActionTypes';

// Interfaces
import {iResponse} from '../../../interface/response/iResponse';

const initialState: iResponse = {
  response: null,
  loading: null,
  error: null,
  message: null,
};

export const TaskListReducer: Reducer<iResponse> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case taskListActionTypes.TASK_LISTS_REQUEST:
      return Object.assign({}, state, {
        userId: action.payload.userId,
        message: null,
        loading: true,
      });

    case taskListActionTypes.TASK_LISTS_SUCCESS:
      return Object.assign({}, state, {
        response: action.payload.response,
        loading: false,
      });

    case taskListActionTypes.TASK_LISTS_ERROR:
      return Object.assign({}, state, {
        message: action.payload.message,
        error: true,
      });

    case taskListActionTypes.UPDATE_TASK_LIST_REQUEST:
      return Object.assign({}, state, {
        taskListId: action.payload.taskListId,
        message: null,
        loading: true,
      });

    case taskListActionTypes.UPDATE_TASK_LIST_SUCCESS:
      return Object.assign({}, state, {
        updateResponse: action.payload.response,
        loading: false,
        error: false,
      });

    case taskListActionTypes.UPDATE_TASK_LIST_ERROR:
      return Object.assign({}, state, {
        message: action.payload.message,
        error: true,
        loading: false,
      });

    case taskListActionTypes.DELETE_TASK_LIST_REQUEST:
      return Object.assign({}, state, {
        taskListId: action.payload.taskListId,
        message: null,
        loading: true,
      });

    case taskListActionTypes.DELETE_TASK_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        deleted: true,
      });

    case taskListActionTypes.DELETE_TASK_LIST_ERROR:
      return Object.assign({}, state, {
        error: true,
        loading: false,
      });

    case taskListActionTypes.CLEAR_DELETED_STATE:
      return Object.assign({}, state, {
        deleted: false,
      });

    default:
      return state;
  }
};
export default TaskListReducer;
