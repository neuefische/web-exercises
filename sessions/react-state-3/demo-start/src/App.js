import { useState } from "react";
import "./styles.css";
import Movie from "./components/Movie/index.js";
import Form from "./components/Form";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: false,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list" role="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie name={movie.name} isLiked={movie.isLiked} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
