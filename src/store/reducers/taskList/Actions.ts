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

  updateTaskList: (payload: any) => ({
    type: taskListActionTypes.UPDATE_TASK_LIST_REQUEST,
    payload,
  }),

  updateTaskListSuccess: (payload: any) => ({
    type: taskListActionTypes.UPDATE_TASK_LIST_SUCCESS,
    payload,
  }),

  updateTaskListError: (payload: any) => ({
    type: taskListActionTypes.UPDATE_TASK_LIST_ERROR,
    payload: payload,
  }),

  deleteTaskList: (payload: any) => ({
    type: taskListActionTypes.DELETE_TASK_LIST_REQUEST,
    payload,
  }),

  deleteTaskListSuccess: (payload: any) => ({
    type: taskListActionTypes.DELETE_TASK_LIST_SUCCESS,
    payload,
  }),

  deleteTaskListError: (payload: any) => ({
    type: taskListActionTypes.DELETE_TASK_LIST_ERROR,
    payload: payload,
  }),

  clearDeletedState: () => ({
    type: taskListActionTypes.CLEAR_DELETED_STATE,
  }),
};
