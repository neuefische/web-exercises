import Card from "./components/Card/Card.js";
import NavButton from "./components/NavButton/NavButton.js";
import NavPagination from "./components/NavPagination/NavPagination.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

// Components
const prevButton = NavButton("prev", () => {
  if (page <= 1) return;
  page--;
  fetchCharacters();
});

const nextButton = NavButton("next", () => {
  if (page >= maxPage) return;
  page++;
  fetchCharacters();
});

const pagination = NavPagination();

const searchBar = SearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(searchBar);

fetchCharacters();

async function fetchCharacters() {
  const result = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await result.json();
  maxPage = data.info.pages;
  const characters = data.results;
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  characters.map(Card).forEach((card) => cardContainer.append(card));
}
