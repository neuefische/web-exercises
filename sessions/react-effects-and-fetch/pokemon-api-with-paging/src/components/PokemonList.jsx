import { useEffect, useState } from "react";
import "./PokemonList.css";


export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0"
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, []);

  return (
    <main>
      <button type="button" className="button">Previous Page</button>
      <button type="button" className="button">Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">{name}</li>
        ))}
      </ul>
    </main>
  );
}
