import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const urlpath = process.env.NODE_ENV;
const urlpath = import.meta.env.VITE_NODE_ENV || process.env.NODE_ENV;
console.log('NODE_ENV : ', urlpath);

const BaseURL = {
  clientDevs: 'http://localhost:8000/api/v1',
  development: 'api/v1',
  production: 'api/v1',
};

//開発時： "http://localhost:8000/api/v1"
//デプロイ時: endpointまでのパスで良いので "/api/v1"

const axiosClient = axios.create({
  baseURL: BaseURL[urlpath],
});

export default axiosClient;
