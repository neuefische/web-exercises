export function Joke(text) {
  const jokeElement = document.createElement("p");
  jokeElement.classList.add("joke");
  jokeElement.textContent = text;
  return jokeElement;
}
