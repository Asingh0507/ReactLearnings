import React, { useRef, useState } from 'react';

function CounterWithRef() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Count (useRef):", countRef.current);
  };

  return (
    <div>
      <p>Count (useRef): {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterWithRef;
