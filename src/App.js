import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const inc = () => {
    if (num < 20) {
      setNum(num + 1);
    }
  };

  const dec = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <>
      <h2>{num}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
};

const App = () => {
  return <Counter />;
};

export default App;
