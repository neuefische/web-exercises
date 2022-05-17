/*
Exercise 1:
For now the pokemon are only fetched when we click the button below. Lets change the code such our app does this automatically.
	- Remove the 'Load Pokemon' button.
	- Change the code below so that the "loadPokemon" function is only executed
	when the app component is rendered.

Hint: Don't forget the dependency array!

Exercise 2:
Add a button that renders the next 20 Pokemon when clicked.

Bonus: Add a button that renders the previous 20 Pokemon when clicked.
The previous button should be disabled if it is not possible to
display the previous Pokemon.
*/

import './styles.css';
import {useState} from 'react';

export default function App() {
	const [pokemon, setPokemon] = useState([]);

	async function loadPokemon() {
		try {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon');
			const data = await response.json();
			setPokemon(data.results);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main className="App">
			<button onClick={loadPokemon}>Load Pokémon</button>
			<ul>
				{pokemon.map(({name}) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</main>
	);
}
