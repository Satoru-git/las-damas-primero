import axiosClient from './axiosClient';

const authApi = {
  checkAuth: () =>
    axiosClient.get('/auth/authentification', { withCredentials: true }),
  login: (sendData) =>
    axiosClient.post('/auth/login', sendData, { withCredentials: true }),
  logout: () => axiosClient.get('/auth/logout', { withCredentials: true }),
};

export default authApi;
