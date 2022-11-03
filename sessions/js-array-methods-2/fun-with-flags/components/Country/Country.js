export function Country(props) {
  const countryElement = document.createElement("li");
  countryElement.className = "country";

  const img = document.createElement("img");
  img.src = `https://countryflagsapi.com/png/${props.code}`;
  img.alt = `Flag of ${props.name}`;

  const name = document.createElement("p");
  name.textContent = props.name;

  countryElement.append(img, name);

  return countryElement;
}
