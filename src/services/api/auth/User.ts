import {api} from '../api';

export async function signUp(user: any) {
  try {
    const response = await api.post('/auth/sign-up', user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Sign up error');
  }
}
