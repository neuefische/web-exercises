import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);

  function handleAddPlace(newPlace) {
    setPlaces([...places, { ...newPlace, id: nanoid() }]);
  }

  function handleDeletePlace(id) {
    setPlaces(places.filter((place) => place.id !== id));
  }

  function handleEditPlace(updatedPlace) {
    setPlaces(
      places.map((place) =>
        place.id === updatedPlace.id ? updatedPlace : place
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        handleAddPlace={handleAddPlace}
        handleDeletePlace={handleDeletePlace}
        handleEditPlace={handleEditPlace}
      />
    </>
  );
}
