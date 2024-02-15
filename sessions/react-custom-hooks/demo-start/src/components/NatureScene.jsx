import { useEffect, useState } from "react";
import "./NatureScene.css"

export default function NatureScene() {
  const BASE_URL = 'https://spiced-nature-scenes-ade32f635b18.herokuapp.com/api/v1/scenes/'
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
      <h1>Nature Scene</h1>
      <figure>
        <img src={natureScene.image} alt="a nature scene" />
        <figcaption>{natureScene.caption}</figcaption>
      </figure>

      <button type="button" className="button" onClick={() => setId(id + 1)}>
        Next Scene
      </button>
    </>
  );
}
