import axios from 'axios';

import history from './history';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  resp => {
    return resp;
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('@DesafioDev:token');
      localStorage.removeItem('@DesafioDev:user');

      history.push('/');
    }

    return Promise.reject(error);
  }
);

export default api;
