import React, { useState } from 'react';
import hotelsApi from './api/hotelsApi';
import authApi from './api/authApi';
import axios from 'axios';
import stayApi from './api/stayApi';
import './App.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import FiberNewIcon from '@mui/icons-material/FiberNew';

const Nav = ({
  setHotelData,
  setIsAuth,
  username,
  isStayedBtn,
  setIsStayedBtn,
  setSearchPrefecture,
}) => {
  // const URL =
  //   process.env.NODE_ENV === 'production'
  //     ? '/data'
  //     : 'http://localhost:8000/api/v1/data';
  const [input, setInput] = useState({
    checkin: new Date(),
    people: 0,
    days: 0,
    prefecture: '北海道',
  });

  async function handleInput(e) {
    e.preventDefault();
    console.log('input.prefecture: ', input.prefecture);
    setSearchPrefecture(input.prefecture);
    // const response = await hotelsApi.getHotels({ input });
    // console.log('bucchi-responseの中身　：', response.data);

    const res = await axios.get(
      `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${
        input.prefecture
      }&applicationId=${import.meta.env.VITE_APP_ID}`
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
  }

  const clickLogout = async () => {
    const res = await authApi.logout();
    if (res.data.message === 'Logout successful') {
      setIsAuth(false);
    }
  };
  const axiosGogo = async () => {
    const res = await axios.get(
      `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${
        input.prefecture
      }&applicationId=${import.meta.env.VITE_APP_ID}`
    );
    console.log('res : ', res);
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
    console.log('ryozo-san,shun-sanの涙の結晶 : ', hotelArr);
  };
  const clickHndler = () => {
    setIsStayedBtn(!isStayedBtn);
  };

  return (
    <nav className="nav_wrap">
      <form onSubmit={handleInput}>
        <div>
          <label>CheckIn</label>
          <input
            type="date"
            className="checkin"
            onChange={(e) => {
              setInput({ ...input, checkin: new Date(e.target.value) });
            }}
          />
        </div>
        <div>
          <label>人数</label>
          <input
            type="number"
            onChange={(e) => {
              setInput({ ...input, people: Number(e.target.value) });
            }}
          />
        </div>
        <div>
          <label>宿泊日数</label>
          <input
            type="number"
            onChange={(e) => {
              setInput({ ...input, days: Number(e.target.value) });
            }}
          />
        </div>
        <div>
          <label>県</label>
          <select
            name="prefecture"
            id="prefecture"
            onChange={(e) => {
              setInput({ ...input, prefecture: e.target.value });
            }}
          >
            <option value="北海道">北海道</option>
            <option value="青森県">青森県</option>
            <option value="岩手県">岩手県</option>
            <option value="宮城県">宮城県</option>
            <option value="秋田県">秋田県</option>
            <option value="山形県">山形県</option>
            <option value="福島県">福島県</option>
            <option value="茨城県">茨城県</option>
            <option value="栃木県">栃木県</option>
            <option value="群馬県">群馬県</option>
            <option value="埼玉県">埼玉県</option>
            <option value="千葉県">千葉県</option>
            <option value="東京都">東京都</option>
            <option value="神奈川県">神奈川県</option>
            <option value="新潟県">新潟県</option>
            <option value="富山県">富山県</option>
            <option value="石川県">石川県</option>
            <option value="福井県">福井県</option>
            <option value="山梨県">山梨県</option>
            <option value="長野県">長野県</option>
            <option value="岐阜県">岐阜県</option>
            <option value="静岡県">静岡県</option>
            <option value="愛知県">愛知県</option>
            <option value="三重県">三重県</option>
            <option value="滋賀県">滋賀県</option>
            <option value="京都府">京都府</option>
            <option value="大阪府">大阪府</option>
            <option value="兵庫県">兵庫県</option>
            <option value="奈良県">奈良県</option>
            <option value="和歌山県">和歌山県</option>
            <option value="鳥取県">鳥取県</option>
            <option value="島根県">島根県</option>
            <option value="岡山県">岡山県</option>
            <option value="広島県">広島県</option>
            <option value="山口県">山口県</option>
            <option value="徳島県">徳島県</option>
            <option value="香川県">香川県</option>
            <option value="愛媛県">愛媛県</option>
            <option value="高知県">高知県</option>
            <option value="福岡県">福岡県</option>
            <option value="佐賀県">佐賀県</option>
            <option value="長崎県">長崎県</option>
            <option value="熊本県">熊本県</option>
            <option value="大分県">大分県</option>
            <option value="宮崎県">宮崎県</option>
            <option value="鹿児島県">鹿児島県</option>
            <option value="沖縄県">沖縄県</option>
          </select>
        </div>
        <button type="submit" className="btn serch_icon">
          <SearchIcon className="material_serch_icon" />
        </button>
      </form>
      <div className="icon_wrap">
        <div className="new_btn">
          <button
          // onClick={clickHndler}
          // style={{ backgroundColor: isStayedBtn ? 'red' : '#343434' }}
          >
            <FiberNewIcon
              className="material_new"
              onClick={clickHndler}
              style={{ backgroundColor: isStayedBtn ? 'yellow' : '#343434' }}
            />
          </button>
        </div>
        <div className="username">
          <button>{username}</button>
        </div>
        <div>
          <Logout onClick={clickLogout} className="material_logout" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
