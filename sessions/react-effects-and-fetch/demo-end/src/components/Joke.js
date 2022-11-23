import { useEffect, useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${id}`
      );
      const joke = await response.json();

      setJoke(joke);
    }

    startFetching();
  }, [id]);

  if (!joke) {
    return null;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button type="button" onClick={() => setId(id + 1)}>
        Next Joke
      </button>
    </>
  );
}
