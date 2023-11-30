import axiosClient from './axiosClient';

const authApi = {
  checkAuth: () => axiosClient.get('/auth/authentification'),
  login: (sendData) =>
    axiosClient.post('/auth/login', sendData, { withCredentials: true }),
};

export default authApi;
