import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.43.226:8080',
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
  post(endpoint: string, body: any, token?: string) {
    if (token) {
      return axiosInstance.post(endpoint, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      return axiosInstance.post(endpoint, body);
    }
  },

  put(endpoint: string, body: any, token?: string) {
    if (token) {
      return axiosInstance.put(endpoint, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      return axiosInstance.put(endpoint, body);
    }
  },

  delete(endpoint: string, token?: string) {
    return axiosInstance.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
