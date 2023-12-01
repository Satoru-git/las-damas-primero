import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedIcon from '@mui/icons-material/Bed';
import StarIcon from '@mui/icons-material/Star';
import stayApi from './api/stayApi';
import { v4 as uuidv4 } from 'uuid';

const MainBody = ({ hotelData, username }) => {
  const postReserve = async (hotel_no, hotel_name) => {
    const sendData = { hotel_no: hotel_no, hotel_name: hotel_name };
    try {
      const response = await stayApi.postReserve(username, sendData);
      console.log('response : ', response);
    } catch (err) {
      console.error(`err : ${err}`);
    }
  };

  return (
    <main>
      <ul>
        {hotelData.map((item, index) => (
          <div className="hotel_card" key={index}>
            <div className="idx">{index + 1}</div>
            {Object.keys(item.hotels).map((key) => {
              switch (key) {
                case 'hotelName':
                  return (
                    <div className="hotel_name" key={uuidv4()}>
                      <h2>{item.hotels[key]}</h2>
                      <StarIcon />
                      <label htmlFor="">
                        {item.hotels.reviewAverage.toFixed(2)}
                      </label>
                      <div className="reserve_btn">
                        <button
                          onClick={() => {
                            postReserve(
                              item.hotels.hotelNo,
                              item.hotels.hotelName
                            );
                          }}
                        >
                          予約
                        </button>
                      </div>
                      {item.stayed ? <BedIcon /> : <BedOutlinedIcon />}
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
