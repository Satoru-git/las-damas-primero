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
            <li key={index}>
              {item.hotelName},{item.hotelImageUrl}
            </li>
          </>
        ))}
      </ul>
    </main>
  );
};
export default MainBody;
