import { useState } from "react";
import "./styles.css";
import Movie from "./components/Movie/index.js";
import Form from "./components/Form";
import { nanoid } from "nanoid";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    like: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    like: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    like: false,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  function handleAddMovie(newMovie) {
    setMovies([...movies, { id: nanoid(), ...newMovie }]);
  }
  function handleDeleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function handleToggleLike(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, like: !movie.like } : movie
      )
    );
  }

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list" role="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie
              id={movie.id}
              name={movie.name}
              like={movie.like}
              onDeleteMovie={handleDeleteMovie}
              onToggleLike={handleToggleLike}
            />
          </li>
        ))}
      </ul>
      <Form onAddMovie={handleAddMovie} />
    </div>
  );
}
