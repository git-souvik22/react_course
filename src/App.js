import "./App.css";
import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("Souvik");
  return (
    <div className="App">
      <Child name={name} />
      <button
        className="btn btn-outline-dark fs-3"
        onClick={() => setName("Developer")}
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
