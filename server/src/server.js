const express = require('express');
const knex = require('../db');
const cors = require('cors');

// const testSend = [
//   {
//     id: 1,
//     hotel_name: 'hotelA',
//     img: '/Users/user/satoru_会社PC/BTC5/Devs/TeamPrg/server/images/ホテル1.jpeg',
//   },
//   {
//     id: 2,
//     hotel_name: 'hotelB',
//     img: '/Users/user/satoru_会社PC/BTC5/Devs/TeamPrg/server/images/ホテル2.jpeg',
//   },
// ];

const setUpServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  //   app.get('/', express.static('client/dist'));

  app.get('/data', async (req, res) => {
    const customerList = await knex('customer').select();
    res.status(200).send(customerList);
  });

    // リクエストされるもの：chekin,people,days
  });

  return app;
};

module.exports = { setUpServer };
