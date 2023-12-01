import axiosClient from './axiosClientRakuten';

const rakutenApi = {
  getHotels: () => axiosClient.get('/'),
};

export default rakutenApi;
