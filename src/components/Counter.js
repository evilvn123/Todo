import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count >= 1) {
      const newCount = count - 1;
      setCount(newCount);
    }
  };
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default Counter;
