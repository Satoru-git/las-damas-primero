import { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import Personal from './Personal';
import Auth from './Auth';

function App() {
  const [hotelData, setHotelData] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <>
      {isAuth ? (
        <Personal
          hotelData={hotelData}
          setHotelData={setHotelData}
          setIsAuth={setIsAuth}
          username={username}
        />
      ) : (
        <Auth setIsAuth={setIsAuth} setUsername={setUsername} />
      )}
    </>
  );
}

export default App;
