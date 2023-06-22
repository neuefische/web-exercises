import { useEffect, useState } from "react";

export default function Planet() {
  const [planet, setPlanet] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    async function startFetching() {
      setPlanet(null);
      const response = await fetch(`https://swapi.dev/api/planets/${id}`);
      const planetData = await response.json();

      setPlanet(planetData);
    }

    startFetching();
  }, [id]);

  if (!planet) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}. </p>
      <p>Terrain: {planet.terrain}</p>
      <button type="button" onClick={() => setId(id + 1)}>
        Next Planet
      </button>
    </>
  );
}
