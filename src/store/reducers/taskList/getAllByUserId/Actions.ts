import {taskListActionTypes} from './ActionTypes';

export const TaskListActions = {
  getTaskLists: (payload: any) => ({
    type: taskListActionTypes.TASK_LISTS_REQUEST,
    payload,
  }),

  getTaskListsSuccess: (payload: any) => ({
    type: taskListActionTypes.TASK_LISTS_SUCCESS,
    payload,
  }),

  getTaskListsError: (payload: any) => ({
    type: taskListActionTypes.TASK_LISTS_ERROR,
    payload: payload,
  }),
};
