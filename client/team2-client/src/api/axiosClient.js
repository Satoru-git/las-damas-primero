import axios from 'axios';
// import dotenv from 'dtoenv';

// dotenv.config();

const BaseURL = {
  clientDevs: 'http://localhost:8000/api/v1',
  development: 'api/v1',
  production: 'api/v1',
};
//開発時： "http://localhost:8000/api/v1"
//デプロイ時: endpointまでのパスで良いので "/api/v1"

const axiosClient = axios.create({
  // baseURL: 'http://localhost:8000/api/v1',
  baseURL: '/api/v1',
  // baseURL: BaseURL[process.env.NODE_ENV],
});

export default axiosClient;
