import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.43.226:8080',
  responseType: 'json',
});

export const api = {
  get(endpoint: string) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint: string, body: any) {
    return axiosInstance.post(endpoint, body);
  },
};
