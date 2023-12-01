import axiosClient from './axiosClient';

const stayApi = {
  getHistories: (username) => axiosClient.get(`/stay/${username}`),
  postReserve: (username, sendData) =>
    axiosClient.post(`/stay/${username}`, sendData),
};

export default stayApi;
