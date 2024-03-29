import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
    // console.log(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You typed: ${username}`);
    setUsername("");
  };

  return (
    <>
      <h1>Demo Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
