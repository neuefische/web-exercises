import { useEffect, useState } from "react";

// Variant 1: Offset Counter
export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          const nextOffset = offset - 20;

          if (nextOffset <= 0) {
            setOffset(0);
            return;
          }

          setOffset(nextOffset);
        }}
        disabled={offset <= 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setOffset(offset + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

// Variant 2: Prev and Next Value
function PokemonListV2() {
  const [pokemonData, setPokemonData] = useState({
    results: [],
    next: null,
    prev: null,
  });
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0`);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setPokemonData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setUrl(pokemonData.previous);
        }}
        disabled={pokemonData.previous === null}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setUrl(pokemonData.next);
        }}
        disabled={pokemonData.next === null}
      >
        Next Page
      </button>
      <ul>
        {pokemonData.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
