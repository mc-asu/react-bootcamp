import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="card">
      <button onClick={handleIncrement}>
        count is {count}
      </button>
    </div>
  );
};

export default Counter;
