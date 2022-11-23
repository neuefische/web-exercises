import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const newData = await response.json();

      setData(newData);
    }

    startFetching();
  }, [url]);

  return data;
}

export function useJoke(initialId = 0) {
  const [id, setId] = useState(initialId);

  const joke = useFetch(`https://example-apis.vercel.app/api/bad-jokes/${id}`);

  function handleNextJoke() {
    setId(joke.nextId);
  }

  return { joke, handleNextJoke };
}
