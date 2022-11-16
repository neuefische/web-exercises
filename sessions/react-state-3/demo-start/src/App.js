import { useState } from "react";
import "./styles.css";
import Movie from "./components/Movie/index.js";
import Form from "./components/Form";

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

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list" role="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie name={movie.name} like={movie.like} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
