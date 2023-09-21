import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:8000';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
