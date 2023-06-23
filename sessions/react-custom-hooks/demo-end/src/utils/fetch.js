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

export function useNatureScene() {
  const [id, setId] = useState(0);
  const BASE_URL = 'https://spiced-nature-scenes-ade32f635b18.herokuapp.com/api/v1/scenes/'

  const natureScene = useFetch(`${BASE_URL}${id}`);

  function handleNextNatureScene() {
    setId(natureScene.nextId);
  }

  return { natureScene, handleNextNatureScene };
}
