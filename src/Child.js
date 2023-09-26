import React from "react";

const Child = ({ name, changeName }) => {
  return (
    <div>
      <h1>{name}</h1>
      <button
        className="btn btn-outline-dark fs-3"
        onClick={() => changeName("Developer")}
      >
        Change Name
      </button>
    </div>
  );
};

export default Child;
