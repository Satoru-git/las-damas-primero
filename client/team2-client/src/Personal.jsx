import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MainBody from './MainBody';
import Footer from './Footer';
import rakutenApi from './api/axiosClientRakuten.js/rakutenApi';
import { useState, useEffect } from 'react';

const Personal = (props) => {
  const {
    hotelData,
    setHotelData,
    setIsAuth,
    username,
    isStayedBtn,
    setIsStayedBtn,
  } = props;

  const [searchPrefecture, setSearchPrefecture] = useState('');

  useEffect(() => {
    console.log('searchPrefecture :', searchPrefecture);
  }, [searchPrefecture]);
  return (
    <div>
      {/* <br />
      <button onClick={axiosGogo}>Axiosでフロントから</button>
      <br /> */}
      <Header isStayedBtn={isStayedBtn} setIsStayedBtn={setIsStayedBtn} />
      <Nav
        setHotelData={setHotelData}
        setIsAuth={setIsAuth}
        username={username}
        isStayedBtn={isStayedBtn}
        setIsStayedBtn={setIsStayedBtn}
        setSearchPrefecture={setSearchPrefecture}
      />
      {hotelData.length !== 0 ? (
        <>
          <MainBody
            hotelData={hotelData}
            username={username}
            isStayedBtn={isStayedBtn}
            setHotelData={setHotelData}
            searchPrefecture={searchPrefecture}
            setIsStayedBtn={setIsStayedBtn}
          />
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
