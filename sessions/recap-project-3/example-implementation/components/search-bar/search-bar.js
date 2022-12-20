export default function createSearchBar(onSubmit) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search-bar');
  searchBar.innerHTML = `
  <input name='query' class='search-bar__input' type="text" placeholder="search characters">
  <button class='search-bar__button'><img class='search-bar__icon' src="assets/magnifying-glass.png" alt=""></button>
  `;
  searchBar.addEventListener('submit', onSubmit);
  return searchBar;
}
