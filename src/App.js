import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "Wrong Turn",
    ratings: 4,
  });

  const handleClick = () => {
    const updateMovie = {
      ...movie,
      ratings: 5,
    };
    setMovie(updateMovie);
  };

  return (
    <>
      <h3>{movie.title}</h3>
      <h4>Ratings: {movie.ratings}</h4>
      <button onClick={handleClick}>Change Ratings</button>
    </>
  );
};

export default App;
