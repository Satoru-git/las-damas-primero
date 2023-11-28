const express = require('express');
const knex = require('../db');
const cors = require('cors');

const testSend = [
  {
    id: 1,
    hotel_name: 'hotelA',
    img: '/Users/user/satoru_会社PC/BTC5/Devs/TeamPrg/server/images/ホテル1.jpeg',
  },
  {
    id: 2,
    hotel_name: 'hotelB',
    img: '/Users/user/satoru_会社PC/BTC5/Devs/TeamPrg/server/images/ホテル2.jpeg',
  },
];
const setUpServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/', async (req, res) => {
    'https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?applicationId=fate.of.avel@gmail.com&format=xml&keyword=%E5%93%81%E5%B7%9D%E3%82%B7%E3%83%BC%E3%82%B5%E3%82%A4%E3%83%89';

    await fetch(
      'https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E3%81%8Eh&applicationId=e06e2a5afcf14b52139c1fb6c58e9dbc'
    ).then((res) => console.log('レスポンス', res));
    console.log('関係ないね');
    res.send('ルートへようこそ');
  });

  app.get('/data', async (req, res) => {
    const customerList = await knex('customer').select();
    res.status(200).send(customerList);
  });
  app.post('/data', (req, res) => {
    res.status(200).send(testSend);
    // リクエストされるもの：chekin,people,days
  });

  return app;
};

module.exports = { setUpServer };
