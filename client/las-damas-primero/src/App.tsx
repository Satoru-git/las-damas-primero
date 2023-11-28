import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import { Hotel } from './globals';
import { Map } from './Map';

function App() {
  const [hotelData, setHotelData] = useState<Hotel[]>([]);
  return (
    <>
      <Header />
      <Nav setHotelData={setHotelData} />
      {hotelData.length !== 0 ? (
        <>
          <MainBody hotelData={hotelData} />
        </>
      ) : (
        <div></div>
      )}
      <Footer />
      <>
        {/* {
          new google.maps.Map(<></>, {
            zoom: 4,
            center: { lat: -25.363, lng: 131.044 },
          })
        } */}
      </>
    </>
  );
}

export default App;
