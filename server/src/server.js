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
  app.use(express.json());

  //   app.get('/', express.static('client/dist'));

  app.get('/data', async (req, res) => {
    const customerList = await knex('customer').select();
    res.status(200).send(customerList);
  });

  app.post('/data', async (req, res) => {
    const rakutenApiKey = 1042996976349696385;
    const hotelData = await fetch(
      `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=岐阜&applicationId=${rakutenApiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const hotelArr = data.hotels
          .map((obj) => obj.hotel)
          .map((obj) => {
            const hotelBasicInfo = obj[0].hotelBasicInfo;
            return {
              hotelName: hotelBasicInfo.hotelName,
              hotelImageUrl: hotelBasicInfo.hotelImageUrl,
              YoutubeUrl: `https://www.youtube.com/results?search_query=${hotelBasicInfo.hotelName}%E3%80%80食事`,
              hotelMapImageUrl: hotelBasicInfo.hotelMapImageUrl,
              access: hotelBasicInfo.access,
              latitude: hotelBasicInfo.latitude * 0.0002778,
              longitude: hotelBasicInfo.longitude * 0.0002778,
            };
          });
        return hotelArr;
      });
    res.status(200).send(hotelData);
    // リクエストされるもの：chekin,people,days
  });

  return app;
};

module.exports = { setUpServer };
