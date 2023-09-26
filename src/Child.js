import React from "react";

const Child = ({ name, setName }) => {
  return (
    <div>
      <h1>{name}</h1>
      <button
        className="btn btn-outline-dark fs-3"
        onClick={() => setName(name === "Souvik" ? "Developer" : "Souvik")}
      >
        Change Name
      </button>
    </div>
  );
};

export default Child;
