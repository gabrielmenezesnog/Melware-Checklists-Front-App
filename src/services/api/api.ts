import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.100.54:8080',
  responseType: 'json',
});

export const api = {
  get(endpoint: string, token: string) {
    return axiosInstance.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  post(endpoint: string, body: any) {
    return axiosInstance.post(endpoint, body);
  },
};
