import axios from 'axios';

const BaseURL = {
  clientDevs: 'http://localhost:8000/api/v1',
  development: 'api/v1',
  production: 'api/v1',
};
const urlpath = import.meta.env.VITE_NODE_ENV;
console.log('NODE_ENV : ', urlpath);
console.log('BaseURL[urlpath] : ', BaseURL[urlpath]);

//開発時： "http://localhost:8000/api/v1"
//デプロイ時: endpointまでのパスで良いので "/api/v1"

const axiosClient = axios.create({
  baseURL: BaseURL[urlpath],
  // baseURL: 'api/v1',
});

export default axiosClient;
