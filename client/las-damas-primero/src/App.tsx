import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import { Hotel } from './globals';

function App() {
  const [hotelData, setHotelData] = useState<Hotel[]>([]);
  return (
    <>
      <Header />
      <Nav setHotelData={setHotelData} />
      {hotelData.length !== 0 ? (
        <>
          {hotelData}
          <MainBody hotelData={hotelData} />
        </>
      ) : (
        <div></div>
      )}
      <Footer />
    </>
  );
}

export default App;
