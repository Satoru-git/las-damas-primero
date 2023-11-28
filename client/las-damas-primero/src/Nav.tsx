import React, { useState } from 'react';
import { Hotel } from './globals';

type Input = {
  checkin: Date;
  people: number;
  days: number;
};

type Props = {
  // hotelData: Hotel;
  setHotelData: React.Dispatch<React.SetStateAction<Hotel[]>>;
};

const Nav: React.FC<Props> = ({ setHotelData }) => {
  const [input, setInput] = useState<Input>({
    checkin: new Date(),
    people: 0,
    days: 0,
  });

  function handleInput(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    };
    fetch('http://localhost:8000/data', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHotelData(data);
        console.log(data);
      });
  }

  return (
    <nav>
      <form onSubmit={handleInput}>
        <div>
          <label>CheckIn</label>
          <input
            type="date"
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

        <input type="submit" value="検索" onClick={handleInput} />
      </form>
    </nav>
  );
};

export default Nav;
