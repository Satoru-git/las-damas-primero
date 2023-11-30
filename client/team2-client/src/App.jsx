import { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

function App() {
  const [hotelData, setHotelData] = useState([]);
  return (
    <>
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
    </>
  );
}

export default App;
