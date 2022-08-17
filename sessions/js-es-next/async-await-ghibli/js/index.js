console.clear();

/* Exercise:
Change the function fetchFilms to an async/await function with a try...catch statement.
*/

const apiURL = 'https://ghibliapi.herokuapp.com/films';

fetchFilms(apiURL);

// --v-- write/change code here --v--

function fetchFilms(url) {
	const response = fetch(url)
		.then(response => response.json())
		.then(data => filmTitleList(data))
		.catch(error => console.error(error.message));
}

// --^-- write/change code here --^--

/* Exercise:
Apply your new knowledge about the desctructuring assignment to change the filmTitleList function below.
*/

function filmTitleList(films) {
	const list = document.createElement('ul');
	list.className = 'list';
	document.body.append(list);

	// --v-- write/change code here --v--

	films.forEach(film => {
		const item = document.createElement('li');
		item.className = 'item';
		item.innerHTML = `
    <h2>${film.title}</h2>
    <ul>
      <li>${film.director} & ${film.producer}</li>
      <li>${film.release_date}</li>
      <li>${film.running_time} min</li>
    </ul>
    `;

	// --^-- write/change code here --^--
	
		list.append(item);
	});
}
