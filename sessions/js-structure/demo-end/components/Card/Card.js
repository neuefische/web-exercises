import { caesarCipher13 } from "../../utils/cipher.js";

export function Card(props) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = props.name;

  const text = document.createElement("p");
  text.className = "card__text";
  text.textContent = caesarCipher13(props.text);

  const button = document.createElement("button");
  button.className = "card__button";
  button.textContent = "Decipher";
  button.addEventListener("click", handleDecipherButtonClick);

  card.append(title, text, button);

  function handleDecipherButtonClick() {
    text.textContent = props.text;
    button.setAttribute("disabled", "");
    card.classList.add("card--deciphered");
  }

  return card;
}
