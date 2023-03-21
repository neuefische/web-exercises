export function Country(props) {
  const countryElement = document.createElement("li");
  countryElement.className = "country";

  const img = document.createElement("img");
  img.src = `https://flagcdn.com/160x120/${props.code.toLowerCase()}.png`;
  img.alt = `Flag of ${props.name}`;

  const name = document.createElement("p");
  name.textContent = props.name;

  countryElement.append(img, name);

  return countryElement;
}
