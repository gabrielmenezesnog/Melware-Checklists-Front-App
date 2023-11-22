import {api} from '../api';

export async function signIn(user: any) {
  try {
    const response = await api.post('/auth/sign-in', user);
    return response.data;
  } catch (error: any) {
    switch (error.response.status) {
      case 401: {
        throw new Error('wrong_password').message;
      }

      case 404: {
        throw new Error('email_not_found').message;
      }

      default:
        throw new Error(error.response.status).message;
    }
  }
}
