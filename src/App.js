import "./App.css";
import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("Souvik");
  const changeName = () => {
    setName(name === "Souvik" ? "Developer" : "Souvik");
  };
  return (
    <div className="App">
      <Child name={name} changeName={changeName} />
    </div>
  );
};

export default App;
