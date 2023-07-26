import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = async user => {
  const { data } = await axios.post('/users/signup', user);
  return data;
};

export const logIn = async user => {
  const { data } = await axios.post('users/login', user);
  return data;
};

export const logOut = async () => {
  await axios.post('/users/logout');
};

export const refreshUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
