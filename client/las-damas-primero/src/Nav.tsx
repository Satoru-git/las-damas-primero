import { useEffect, useState, useRef } from 'react';

type Input = {
  checkin: Date;
  people: number;
  days: number;
  dinner: boolean;
  breakfast: boolean;
};

function Nav() {
  const tempInput = useRef<Input>({
    checkin: new Date(),
    people: 0,
    days: 0,
    dinner: false,
    breakfast: false,
  });
  const [input, setInput] = useState<Input>();

  useEffect(() => {}, [input]);

  function handleInput() {
    console.log('hahaha');
  }

  return (
    <nav>
      <form>
        <div>
          <label>CheckIn</label>
          <input
            type="date"
            onChange={(e) =>
              (tempInput.current.checkin = new Date(e.target.value))
            }
          />
        </div>
        <div>
          <label>人数</label>
          <input type="number" />
        </div>
        <div>
          <label>宿泊日数</label>
          <input type="number" />
        </div>
        <div>
          <label>夕食</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>朝食</label>
          <input type="checkbox" />
        </div>
        <input type="submit" value="検索" onClick={handleInput} />
      </form>
    </nav>
  );
}

export default Nav;
