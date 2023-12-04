import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedIcon from '@mui/icons-material/Bed';
import StarIcon from '@mui/icons-material/Star';
import stayApi from './api/stayApi';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const MainBody = ({
  hotelData,
  username,
  isStayedBtn,
  setHotelData,
  searchPrefecture,
  setIsStayedBtn,
}) => {
  const [renderArray, setRenderArray] = useState([...hotelData]);
  const [isModal, setIsModal] = useState(false);
  const [hotelName, setHotelName] = useState('');
  const [hotelImage, setHotelImage] = useState('');

  const postReserve = async (obj) => {
    const { hotelName: hotel_name, hotelNo: hotel_no, hotelImageUrl } = obj;
    setHotelName(hotel_name);
    setHotelImage(hotelImageUrl);
    const sendData = { hotel_no: hotel_no, hotel_name: hotel_name };
    try {
      const response = await stayApi.postReserve(username, sendData);
      // console.log('response : ', response);
      setIsModal(true);
    } catch (err) {
      console.error(`err : ${err}`);
    }
  };

  useEffect(() => {
    if (isStayedBtn) {
      const tempHotel = [...hotelData];
      const notStayed = tempHotel.filter((elem) => !elem.stayed);
      const stayed = tempHotel.filter((elem) => elem.stayed);
      const result = [...notStayed, ...stayed];
      setRenderArray([...result]);
    } else {
      setRenderArray([...hotelData]);
    }
  }, [hotelData]);

  useEffect(() => {
    if (isStayedBtn) {
      const notStayed = renderArray.filter((elem) => !elem.stayed);
      const stayed = renderArray.filter((elem) => elem.stayed);
      const result = [...notStayed, ...stayed];
      setRenderArray([...result]);
    } else {
      setRenderArray([...hotelData]);
    }
  }, [isStayedBtn]);

  return (
    <main>
      {isModal && (
        <Modal
          setIsModal={setIsModal}
          hotelName={hotelName}
          hotelImage={hotelImage}
          setHotelData={setHotelData}
          username={username}
          searchPrefecture={searchPrefecture}
        />
      )}
      <ul>
        {renderArray.map((item, index) => (
          <div
            className="hotel_card"
            style={{
              backgroundColor: item.stayed
                ? 'rgba(168, 166, 166, 0.516)'
                : 'rgba(52, 52, 52, 0.541)',
            }}
            key={index}
          >
            <div className="idx">{index + 1}</div>
            {Object.keys(item.hotels).map((key) => {
              switch (key) {
                case 'hotelName':
                  return (
                    <div className="hotel_name" key={uuidv4()}>
                      <div className="each_hotel_name">
                        <h2>{item.hotels[key]}</h2>
                        <div className="star_icon">
                          <StarIcon className="material_star" />
                        </div>
                        <div className="review_point">
                          <label htmlFor="">
                            {item.hotels.reviewAverage.toFixed(2)}
                          </label>
                        </div>
                      </div>
                      <div className="booking_wrap">
                        <div
                          style={{
                            visibility: item.stayed ? 'visible' : 'hidden',
                          }}
                        >
                          <WarningAmberIcon className="material_caution" />
                        </div>
                        <div className="reserve_btn">
                          <button
                            onClick={() => {
                              postReserve(item.hotels);
                            }}
                          >
                            {item.stayed ? '宿泊済' : '予　約'}
                          </button>
                        </div>
                        <div>
                          {item.stayed ? (
                            <BedIcon className="bed_icon" />
                          ) : (
                            <BedOutlinedIcon className="bed_icon not_stayed" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                case 'hotelImageUrl':
                  return (
                    <div className="hotel_img" key={uuidv4()}>
                      <img src={item.hotels[key]} alt="imageなし" />
                    </div>
                  );
                case 'position':
                  return (
                    <div className="position" key={uuidv4()}>
                      <iframe
                        src={`https://maps.google.co.jp/maps?output=embed&q=${item.hotels[key].latitude},${item.hotels[key].longitude}`}
                      ></iframe>
                    </div>
                  );
                case 'YoutubeUrl':
                  return (
                    <div className="youtubeUrl" key={uuidv4()}>
                      <a href={item.hotels[key]} target="_blank">
                        <h3>{item.hotels.hotelName}の食事</h3>
                      </a>
                    </div>
                  );
                case 'access':
                  return (
                    <div className="access" key={uuidv4()}>
                      {item.hotels[key]}
                    </div>
                  );
                case 'hotelMapImageUrl':
                  return (
                    <div className="hotel_map_img" key={uuidv4()}>
                      <img src={item.hotels[key]} alt="Image なし" />
                    </div>
                  );
              }
            })}
          </div>
        ))}
      </ul>
    </main>
  );
};
export default MainBody;
