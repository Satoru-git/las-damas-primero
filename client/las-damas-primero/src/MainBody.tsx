import { Hotel } from './globals';

type mainProps = {
  hotelData: Hotel[];
};

const MainBody: React.FC<mainProps> = ({ hotelData }) => {
  return (
    <main>
      <ul>
        {hotelData.map((item, index) => (
          <div className="hotel_card">
            {Object.keys(item).map((key) => (
              <li key={`${index}_${key}`}>
                {key}:{item[key]}
              </li>
            ))}
          </div>
        ))}
      </ul>
    </main>
  );
};
export default MainBody;
