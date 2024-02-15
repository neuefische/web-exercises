import { useJoke } from "../utils/fetch";
import "./Joke.css";

export default function Joke() {
  const { joke, handleNextJoke } = useJoke();

  if (!joke) {
    return null;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button type="button" className="button" onClick={handleNextJoke}>
        Next Joke
      </button>
    </>
  );
}
