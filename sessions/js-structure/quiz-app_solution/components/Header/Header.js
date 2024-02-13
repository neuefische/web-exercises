export function Header() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = /* html */ `
	  <h1 class="header__title">Quiz-App</h1>
	`;

  return header;
}
