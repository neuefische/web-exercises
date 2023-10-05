import { createContext, useContext, useState } from "react";

const PlacesContext = createContext();

export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState([]);
  const [currentPlace, setCurrentPlace] = useState(null);

  return (
    <PlacesContext.Provider
      value={{ places, currentPlace, setPlaces, setCurrentPlace }}
    >
      {children}
    </PlacesContext.Provider>
  );
}

export function usePlaces() {
  return useContext(PlacesContext);
}
