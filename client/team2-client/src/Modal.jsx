import React from 'react';
import './App.css';
import axios from 'axios';
import stayApi from './api/stayApi';

const Modal = (props) => {
  const {
    setIsModal,
    hotelName,
    hotelImage,
    setHotelData,
    searchPrefecture,
    username,
  } = props;

  const clickHandler = async () => {
    console.log('searchPrefecture; ', searchPrefecture);
    const res = await axios.get(
      `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${searchPrefecture}&applicationId=${
        import.meta.env.VITE_APP_ID
      }`
    );
    // console.log('res : ', res);
    const hotelArr = res.data.hotels
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
    hotelArr.sort((a, b) => b.reviewAverage - a.reviewAverage);
    console.log('ryozo-san,shun-sanの涙の結晶 : ', hotelArr);
    const notNullableHotels = hotelArr.filter(
      (elm) => elm.reviewAverage !== null
    );
    // setHotelData(response.data);
    const stayHistories = await stayApi.getHistories(username);
    console.log('stayHistories : ', stayHistories);
    const stayHotelNumbers = stayHistories.data.map((elm) => elm.hotel_no);
    const newHotelsArray = notNullableHotels.map((elm) => ({
      hotels: elm,
      stayed: stayHotelNumbers.includes(elm.hotelNo),
    }));
    console.log('newHotelsArray : ', newHotelsArray);
    setHotelData(newHotelsArray);
    setIsModal(false);
  };
  return (
    <div className="modal__container">
      <div className="modal__wrap">
        <h1 className="modal__title">予約しました</h1>
        <div className="modal__hotelname">
          <label htmlFor="">{hotelName}</label>
        </div>
        <div className="modal__image">
          <img src={hotelImage} alt="#" />
        </div>
        <div className="modal__btn">
          <button onClick={clickHandler}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
