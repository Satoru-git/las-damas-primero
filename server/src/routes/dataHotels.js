const router = require('express').Router();
const knex = require('../../db/index.js');

router.get('/', async (req, res) => {
  const customerList = await knex('customer').select();
  res.status(200).send(customerList);
});

router.post('/', async (req, res) => {
  console.log(req.body.prefecture);
  const rakutenApiKey = '1042996976349696385';
  const hotelData = await fetch(
    `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${req.body.input.prefecture}&applicationId=${rakutenApiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
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
            position: {
              latitude: hotelBasicInfo.latitude * 0.0002778,
              longitude: hotelBasicInfo.longitude * 0.0002778,
            },
          };
        });

      return hotelArr;
    });

  res.status(200).send(hotelData);
  // リクエストされるもの：chekin,people,days
});

module.exports = router;
