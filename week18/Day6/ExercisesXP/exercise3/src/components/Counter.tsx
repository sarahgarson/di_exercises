import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Estado para armazenar o valor do contador
  const [count, setCount] = useState<number>(0);

  // Função para incrementar o contador
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Função para decrementar o contador
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
