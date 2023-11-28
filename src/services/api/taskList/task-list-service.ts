import {iTaskList} from '../../../interface/taskList/iTaskList';
import {api} from '../api';

export namespace taskListService {
  export async function getAllByUserId(userId: string, token: string) {
    try {
      const response = await api.get(
        `/task-list/get-all-by-user-id/${userId}`,
        token,
      );
      return response.data;
    } catch (error: any) {
      switch (error.response.status) {
        case 403: {
          throw new Error('access_denied').message;
        }

        case 404: {
          throw new Error('email_not_found').message;
        }

        default:
          throw new Error(error.response.status).message;
      }
    }
  }

  export async function updateTaskListById(
    taskListId: string,
    taskList: iTaskList,
    token: string,
  ) {
    try {
      const response = await api.put(
        `/task-list/update-task-list/${taskListId}`,
        taskList,
        token,
      );

      return response.data;
    } catch (error: any) {
      switch (error.response.status) {
        case 403: {
          throw new Error('access_denied').message;
        }

        case 401: {
          throw new Error('access_denied').message;
        }

        default:
          throw new Error(error.response.status).message;
      }
    }
  }

  export async function deleteTaskListById(taskListId: string, token: string) {
    try {
      const response = await api.delete(
        `/task-list/delete-task-list/${taskListId}`,
        token,
      );

      return response.data;
    } catch (error: any) {
      switch (error.response.status) {
        case 403: {
          throw new Error('access_denied').message;
        }

        case 401: {
          throw new Error('access_denied').message;
        }

        default:
          throw new Error(error.response.status).message;
      }
    }
  }
}
