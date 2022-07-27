/*
Exercise:
Add a button that renders the next 20 Pokemon when clicked.

Bonus: Add a button that renders the previous 20 Pokemon when clicked.
The previous button should only be displayed if it is possible to
display the previous Pokemon.
*/

import './styles.css';
import { useEffect, useState } from 'react';

export default function App() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		loadPokemon();
		async function loadPokemon() {
			try {
				const response = await fetch('https://pokeapi.co/api/v2/pokemon');
				const data = await response.json();
				setPokemon(data.results);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	return (
		<main className="App">
			<ul>
				{pokemon.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</main>
	);
}
