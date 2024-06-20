// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Conatar: {count}</p>
      <button onClick={incrementCount}>Incremento</button>
    </div>
  );
};

export default Counter;
