// Import Functions & Modules
import { JokeSection } from "../components/JokeSection/JokeSection.js";
import { Joke } from "../components/Joke/Joke.js";

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

function setJoke(joke) {
  // Clear the joke section
  jokeSection.innerHTML = "";

  // Create a new joke DOM element and append it to joke section
  const newJoke = new Joke();
  newJoke.textContent = joke;
  jokeSection.append(newJoke);
}

// setJoke("Thanks for explaining the word “many” to me, it means a lot.");
