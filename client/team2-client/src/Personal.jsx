import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MainBody from './MainBody';
import Footer from './Footer';

const Personal = (props) => {
  const { hotelData, setHotelData } = props;
  return (
    <div>
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
