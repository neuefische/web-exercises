console.clear();

/*
Exercise:

Rewrite the code below to change the fetch to an async/await function and apply the destructuring assignment for the createPeopleList function.

Don't forget to include the try...catch statement in your async/await function!
*/

const apiUrl = 'https://swapi.dev/api/people';

fetch(apiUrl)
	.then(response => response.json())
	.then(data => createPeopleList(data.results));

function createPeopleList(people) {
	const listElement = document.createElement('ul');
	listElement.className = 'tag-list';
	document.body.append(listElement);

	people.forEach(person => {
		const item = document.createElement('li');
		item.className = 'tag';
		item.innerHTML = `
    <h2>${person.name}</h2>
    <ul>
      <li>Hair: ${person.hair_color}</li>
      <li>Skin: ${person.skin_color}</li>
      <li>Eye: ${person.eye}</li>
    </ul>
    `;
		listElement.append(item);
	});
}
