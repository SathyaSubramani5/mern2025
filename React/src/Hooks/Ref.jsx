import React, { useEffect, useRef, useState } from 'react';

const RefExample = () => {
  const [count, setCount] = useState(0);
  const value = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      value.current = value.current + 1;
      console.log("Ref value incremented:", value.current);
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>State Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <h1>Ref Count: {value.current}</h1>
    </div>
  );
};

export default RefExample;
