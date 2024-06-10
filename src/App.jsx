//Rendering process : Batch Rendering

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("render");
  const handleCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); // all will be batched up not for every state change app re-render it will run after batching all the changes and run together
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={handleCount}>Click</button>
    </>
  );
};

export default App;
