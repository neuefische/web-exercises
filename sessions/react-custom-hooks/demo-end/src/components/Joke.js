import { useJoke } from "../utils/fetch";

export default function Joke() {
  const { joke, handleNextJoke } = useJoke();

  if (!joke) {
    return null;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button type="button" onClick={handleNextJoke}>
        Next Joke
      </button>
    </>
  );
}
