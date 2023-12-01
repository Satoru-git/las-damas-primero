import axiosClient from './axiosClient';

const stayApi = {
  getHistories: (username) => axiosClient.get(`/stay/${username}`),
};

export default stayApi;
