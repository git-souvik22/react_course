import "./App.css";
import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("Souvik");
  const changeName = (value) => {
    setName(name === "Souvik" ? value : "Souvik");
  };
  return (
    <div className="App">
      <Child name={name} changeName={changeName} />
    </div>
  );
};

export default App;
