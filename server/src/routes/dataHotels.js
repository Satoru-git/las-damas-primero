const router = require('express').Router();
const knex = require('../../db/index.js');
require('dotenv').config();

router.get('/', async (req, res) => {
  const customerList = await knex('customer').select();
  res.status(200).send(customerList);
});

router.post('/', async (req, res) => {
  const hotelData = await fetch(
    `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${req.body.input.prefecture}&applicationId=${process.env.APP_ID}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.hotels[0].hotel[0].hotelBasicInfo.reviewAverage);
      const hotelArr = data.hotels
        .map((obj) => obj.hotel)
        .map((obj) => {
          const hotelBasicInfo = obj[0].hotelBasicInfo;
          return {
            hotelName: hotelBasicInfo.hotelName,
            hotelNo: hotelBasicInfo.hotelNo,
            reviewAverage: hotelBasicInfo.reviewAverage,
            hotelImageUrl: hotelBasicInfo.hotelImageUrl,
            YoutubeUrl: `https://www.youtube.com/results?search_query=${hotelBasicInfo.hotelName}%E3%80%80食事`,
            hotelMapImageUrl: hotelBasicInfo.hotelMapImageUrl,
            access: hotelBasicInfo.access,
            position: {
              latitude: hotelBasicInfo.latitude * 0.0002778,
              longitude: hotelBasicInfo.longitude * 0.0002778,
            },
          };
        });
      return hotelArr;
      //レビューにnullがあるものはバックエンド側で弾く
    });
  console.log('@@@@@@@@@', hotelData);
  hotelData.sort((a, b) => b.reviewAverage - a.reviewAverage);
  console.log('--------------', hotelData);
  res.status(200).send(hotelData);
  // リクエストされるもの：chekin,people,days
});

module.exports = router;
