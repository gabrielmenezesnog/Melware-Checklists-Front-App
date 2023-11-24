import {Reducer} from '@reduxjs/toolkit';

// ActionTypes
import {taskListActionTypes} from './ActionTypes';

// Interfaces
import {iResponse} from '../../../../interface/response/iResponse';

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
        loggedIn: true,
        loading: false,
      });

    case taskListActionTypes.TASK_LISTS_ERROR:
      return Object.assign({}, state, {
        message: action.payload.message,
        error: true,
      });

    default:
      return state;
  }
};
export default TaskListReducer;
