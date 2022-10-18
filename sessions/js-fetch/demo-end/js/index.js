// Import Functions & Modules
import {JokeSection} from '../components/JokeSection/JokeSection.js';
import {Joke} from '../components/Joke/Joke.js';

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

// Get a random joke from a Bad Jokes API
async function getJoke() {
	try {
		const response = await fetch('https://example-apis.vercel.app/api/bad-jokes/random');

		// Failure (Bad response)
		if (!response.ok) {
			console.error('Bad Response');
		} else {
			// Success
			const jokeData = await response.json();

			// Assemble DOM for the joke
			const joke = Joke();
			joke.textContent = jokeData.joke;
			jokeSection.append(joke);
		}
		// Failure (Error during fetch)
	} catch (error) {
		console.error('An Error occurred');
	}
}

getJoke();

// Optional Alternative:
// Get a list of all jokes from Bad Jokes API
/*
async function getJokes() {
	try {
		const response = await fetch('https://example-apis.vercel.app/api/bad-jokes');

		// Failure (Bad response)
		if (!response.ok) {
			console.error('Bad Response');
		} else {
			// Success
			const jokesData = await response.json();

			// Assemble DOM for the jokes
			jokesData.forEach(jokeData => {
				const joke = Joke();
				joke.textContent = jokeData.joke;
				jokeSection.append(joke);
			});
		}
		// Failure (Error during fetch)
	} catch (error) {
		console.error('An Error occurred');
	}
}

getJokes();
*/
