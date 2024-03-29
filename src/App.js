import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index + 1}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
