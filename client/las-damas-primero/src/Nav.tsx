import { useState } from 'react';

type Input = {
  checkin: Date;
  people: number;
  days: number;
  dinner: boolean;
  breakfast: boolean;
};

function Nav() {
  const [input, setInput] = useState<Input>({
    checkin: new Date(),
    people: 0,
    days: 0,
    dinner: false,
    breakfast: false,
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
      .then((data) => console.log(data));
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
        <div>
          <label>夕食</label>
          <input
            type="checkbox"
            onChange={(e) => {
              setInput({ ...input, dinner: Boolean(e.target.value) });
            }}
          />
        </div>
        <div>
          <label>朝食</label>
          <input
            type="checkbox"
            onChange={(e) => {
              setInput({ ...input, breakfast: Boolean(e.target.value) });
            }}
          />
        </div>
        <input type="submit" value="検索" onClick={handleInput} />
      </form>
    </nav>
  );
}

export default Nav;
