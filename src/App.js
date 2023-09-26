import "./App.css";
import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("Souvik");
  return (
    <div className="App">
      <Child name={name} setName={setName} />
    </div>
  );
};

export default App;
