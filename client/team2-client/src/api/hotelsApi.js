import axiosClient from './axiosClient';

const hotelsApi = {
  getHotels: (sendData) => axiosClient.post('/data', sendData),
};

export default hotelsApi;
