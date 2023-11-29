const express = require('express');
const knex = require('../db');
const cors = require('cors');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const cookieSession = require('cookie-session');
// const secret = "secretCuisine123"

/////////////////////////////
// passport.use(
//   new LocalStrategy(async function verify(username, password, cb) {
//     try {
//       const customerList = await knex('customer').select();
//       const user = customerList.custoemer_id === username;

//       if (!user) {
//         return cb(null, false);
//       }
//       if (user.passoword !== password) {
//         return cb(null, false);
//       }

//       return cb(null, user);
//     } catch (err) {
//       return cb(err);
//     }
//   })
// );

// passport.serializeUser((user, cb) => {
//   cb(null, user.username);
// });

// // ユニークユーザー識別子からユーザーデータを取り出す
// passport.deserializeUser((username, cb) => {
//   const user = DB_USER.find((v) => {
//     return v.username === username;
//   });

//   if (!user) {
//     return cb(`ERROR : NO USERNAME -> ${username}`);
//   }

//   return cb(null, user);
// });
/////////////////////////////

// const testSend = [
// {
// id: 1,
// hotel_name: 'hotelA',
// img: '/Users/user/satoru_会社PC/BTC5/Devs/TeamPrg/server/images/ホテル1.jpeg',
// },
// {
// id: 2,
// hotel_name: 'hotelB',
// img: '/Users/user/satoru_会社PC/BTC5/Devs/TeamPrg/server/images/ホテル2.jpeg',
// },
// ];

const setUpServer = () => {
  const app = express();
  app.use(express.json());
  // app.get('/', express.static('client/dist'));

  // app.use(cookieSession({
  //   name:"session",
  //   keys:[secret],
  //   maxAge:24*60*60*1000
  // }))

  app.get('/data', async (req, res) => {
    const customerList = await knex('customer').select();
    res.status(200).send(customerList);
  });

  app.post('/data', async (req, res) => {
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

  return app;
};

module.exports = { setUpServer };
