import { useState } from "react";

export default function HomePage() {
  const [id, setId] = useState(0);
  const [funnyJokeIds, setFunnyJokeIds] = useState([]);

  const {
    data: joke,
    isLoading,
    error,
  } = useSWR(`https://example-apis.vercel.app/api/bad-jokes/${id}`);

  function handlePrevJoke() {
    setId(joke.prevId);
  }

  function handleNextJoke() {
    setId(joke.nextId);
  }

  function handleToggleFunnyJoke(jokeId) {
    // you can reuse the "isFunny" variable here if you like
    if (funnyJokeIds.includes(jokeId)) {
      //joke is in the list, to toggle the state we need to remove it.
      const updatedFunnyJokeIds = funnyJokeIds.filter((id) => id !== jokeId);
      setFunnyJokeIds(updatedFunnyJokeIds);
    } else {
      //joke is not the list, to toggle the state we need to add it.
      const updatedFunnyJokeIds = [...funnyJokeIds, jokeId];
      setFunnyJokeIds(updatedFunnyJokeIds);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !joke) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{joke.joke}</h1>
      <button type="button" onClick={() => handleToggleFunnyJoke(id)}>
        {isFunny ? "😂 is Funny" : "😐 is not Funny"}
      </button>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
