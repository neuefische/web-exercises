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

/*
fetch("https://example-apis.vercel.app/api/bad-jokes/random")
  .then((response) => response.json())
  .then((data) => setJoke(data.joke))
  .catch((error) => console.error("An error occured"));
*/

async function getJoke() {
  try {
    const response = await fetch(
      "https://example-apis.vercel.app/api/bad-jokes/random"
    );
    const data = await response.json();
    setJoke(data.joke);
  } catch (error) {
    console.error("An Error occurred");
  }
}

getJoke();
