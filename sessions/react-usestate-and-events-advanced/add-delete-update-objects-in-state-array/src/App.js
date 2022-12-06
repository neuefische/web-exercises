/**
 * Given is a simple movie app.
 * There is a state consisting of an array of objects.
 *
 * Implement the following features:
 *
 * 1. Write a function deleteMovie() and pass it to your movie component.
 * Implement a delete button inside the movie component.
 *
 * 2. Write a function addMovie(). Use the name you get from the Form component
 *  and the uid() function to create a unique id.
 *
 * 3. Write a function toggleLike(). Pass it to your Movie component.
 * Make sure to use the correct prop name.
 * (Hint: Have a look inside the Movie component to find the correct prop).
 *
 * 4. Optional: Refactor your toggleLike() function with the useImmer hook.
 *
 * 5. Optional: Write a function replaceMovie(). Replace your favourite movie
 * with your second favourite one. Inside your App component, implement a button
 * and pass the replaceMovie() function to it.
 *  */

import Movie from "./Movie.js";
import Form from "./Form.js";
import { useState } from "react";
import { uid } from "uid";
import { useImmer } from "use-immer";
import "./styles.css";

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

  function deleteMovie() {}

  function addMovie(name) {
    // Hint: to set a unique id, use "id: uid()"
  }

  function toggleLike() {}

  return (
    <div className="app">
      <h1>React useState and Events - Advanced</h1>
      <h2>Updating State Exercise</h2>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          key={movie.id}
          name={movie.name}
          like={movie.like}
        />
      ))}
      <Form handleSubmit={addMovie} />
    </div>
  );
}
