import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MainBody from './MainBody';
import Footer from './Footer';
import rakutenApi from './api/axiosClientRakuten.js/rakutenApi';

const Personal = (props) => {
  const { hotelData, setHotelData, setIsAuth, username } = props;

  return (
    <div>
      {/* <br />
      <button onClick={axiosGogo}>Axiosでフロントから</button>
      <br /> */}
      <Header />
      <Nav
        setHotelData={setHotelData}
        setIsAuth={setIsAuth}
        username={username}
      />
      {hotelData.length !== 0 ? (
        <>
          <MainBody hotelData={hotelData} username={username} />
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
