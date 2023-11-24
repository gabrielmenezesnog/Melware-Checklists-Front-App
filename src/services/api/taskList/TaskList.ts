import {api} from '../api';

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
