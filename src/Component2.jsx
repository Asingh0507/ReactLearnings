import React, { useState } from 'react';

function CounterWithState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log("Component re-rendered with useState");

  return (
    <div>
      <p>Count (useState): {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterWithState;
