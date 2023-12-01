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
  // baseURL: '/api/v1',
  baseURL:
    'https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E9%9D%99%E5%B2%A1%E7%9C%8C&applicationId=1062160351493973141',
});

export default axiosClient;
