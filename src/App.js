import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", ratings: 4 },
    { id: 2, title: "Superman", ratings: 5 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((mov) => (mov.id === 1 ? { ...mov, title: "Avatar" } : mov))
    );
  };
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </>
  );
};

export default App;
