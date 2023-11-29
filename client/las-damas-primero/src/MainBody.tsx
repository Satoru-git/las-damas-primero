import { Hotel } from './globals';

type mainProps = {
  hotelData: Hotel[];
};

const MainBody: React.FC<mainProps> = ({ hotelData }) => {
  return (
    <main>
      <ul>
        {hotelData.map((item, index) => (
          <div className="hotel_card" key={index}>
            <div className="idx">{index + 1}</div>
            {Object.keys(item).map((key) => {
              switch (key) {
                case 'hotelName':
                  return (
                    <div className="hotel_name">
                      <h2>{item[key]}</h2>
                    </div>
                  );
                case 'hotelImageUrl':
                  return (
                    <div className="hotel_img">
                      <img src={item[key]} alt="imageなし" />
                    </div>
                  );
                case 'position':
                  return (
                    <div className="position">
                      <iframe
                        src={`https://maps.google.co.jp/maps?output=embed&q=${item[key].latitude},${item[key].longitude}`}
                      ></iframe>
                    </div>
                  );
                case 'YoutubeUrl':
                  return (
                    <div className="youtubeUrl">
                      <a href={item[key]} target="_blank">
                        <h3>{item.hotelName}の食事</h3>
                      </a>
                    </div>
                  );
                case 'access':
                  return <div className="access">{item[key]}</div>;
                case 'hotelMapImageUrl':
                  return (
                    <div className="hotel_map_img">
                      <img src={item[key]} alt="Image なし" />
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
