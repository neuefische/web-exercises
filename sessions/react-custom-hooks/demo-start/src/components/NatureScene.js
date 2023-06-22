import { useEffect, useState } from "react";

export default function Planet() {
  const BASE_URL = 'http://localhost:5000/api/data/'
  const [natureScene, setNatureScene] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    async function startFetching()    {
      setNatureScene(null);
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json();

      setNatureScene(data);
    }

    startFetching();
  }, [id]);

  if (!natureScene) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1>{natureScene.name}</h1>
      <figure>
        <img src={natureScene.image} alt="a nature scene" />
        <figcaption>{natureScene.caption}</figcaption>
      </figure>

      <button type="button" onClick={() => setId(id + 1)}>
        Next Scene
      </button>
    </>
  );
}
