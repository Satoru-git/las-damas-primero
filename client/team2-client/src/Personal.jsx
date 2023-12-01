import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MainBody from './MainBody';
import Footer from './Footer';
import rakutenApi from './api/axiosClientRakuten.js/rakutenApi';
import axios from 'axios';

const Personal = (props) => {
  const { hotelData, setHotelData } = props;

  const fetchGogo = async () => {
    const hotelData = await fetch(
      `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E9%9D%99%E5%B2%A1%E7%9C%8C&applicationId=1062160351493973141`
    )
      .then((res) => res.json())
      .then((elm) => {
        console.log('fetch後 : ', elm);
      });
  };

  const axiosGogo = async () => {
    // const res = await rakutenApi.getHotels();
    // console.log('axios後 : ', res.data);

    axios
      .get(
        'https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E9%9D%99%E5%B2%A1%E7%9C%8C&applicationId=1062160351493973141'
      )
      .then((response) => console.log('axiosごのデータ : ', response.data));
  };

  return (
    <div>
      <button onClick={fetchGogo}>Fetchでフロントから</button>
      <br />
      <br />
      <button onClick={axiosGogo}>Axiosでフロントから</button>
      <Header />
      <Nav setHotelData={setHotelData} />
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
