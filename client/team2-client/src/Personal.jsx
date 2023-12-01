import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MainBody from './MainBody';
import Footer from './Footer';
import rakutenApi from './api/axiosClientRakuten.js/rakutenApi';

const Personal = (props) => {
  const { hotelData, setHotelData, setIsAuth } = props;

  // const axiosGogo = async () => {
  //   const res = await axios.get(
  //     `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E9%9D%99%E5%B2%A1%E7%9C%8C&applicationId=${
  //       import.meta.env.VITE_APP_ID
  //     }`
  //   );
  //   console.log('res : ', res);
  //   const hotelArr = res.data.hotels
  //     .map((obj) => obj.hotel)
  //     .map((obj) => {
  //       const hotelBasicInfo = obj[0].hotelBasicInfo;
  //       return {
  //         hotelName: hotelBasicInfo.hotelName,
  //         hotelNo: hotelBasicInfo.hotelNo,
  //         reviewAverage: hotelBasicInfo.reviewAverage,
  //         hotelImageUrl: hotelBasicInfo.hotelImageUrl,
  //         YoutubeUrl: `https://www.youtube.com/results?search_query=${hotelBasicInfo.hotelName}%E3%80%80食事`,
  //         hotelMapImageUrl: hotelBasicInfo.hotelMapImageUrl,
  //         access: hotelBasicInfo.access,
  //         position: {
  //           latitude: hotelBasicInfo.latitude * 0.0002778,
  //           longitude: hotelBasicInfo.longitude * 0.0002778,
  //         },
  //       };
  //     });
  //   console.log('ryozo-san,shun-sanの涙の結晶 : ', hotelArr);
  // };

  return (
    <div>
      {/* <br />
      <button onClick={axiosGogo}>Axiosでフロントから</button>
      <br /> */}
      <Header />
      <Nav setHotelData={setHotelData} setIsAuth={setIsAuth} />
      {hotelData.length !== 0 ? (
        <>
          <MainBody hotelData={hotelData} />
        </>
      ) : (
        <>
          <div>
            <h1></h1>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Personal;
