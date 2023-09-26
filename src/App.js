import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Souvik");
  return (
    <div className="App">
      <h1>{name}</h1>
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
