import React, { useState } from 'react';

function ItemCount({ estoque, inicial, add }) {
  const [count, setCount] = useState(inicial);

  const Somar = () => {
    if (count < estoque) {
      setCount(count + 1);
    }
  };

  const Decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={Decrementar}>-</button>
      <span>{count}</span>
      <button onClick={Somar}>+</button>
      <div>
        <button onClick={() => add(count)} disabled={count === 0}>Adicionar</button>
      </div>
    </div>
  );
}

export default ItemCount;