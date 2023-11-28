import { Hotel } from './globals';

type mainProps = {
  hotelData: Hotel[];
};

const MainBody: React.FC<mainProps> = ({ hotelData }) => {
  return (
    <main>
      <ul>
        {hotelData.map((item, index) => (
          <>
            {Object.keys(item).map((key) => (
              <li className="hotel_card" key={`${index}_${key}`}>
                {key}:{item[key]}
              </li>
            ))}
          </>
        ))}
      </ul>
    </main>
  );
};
export default MainBody;
