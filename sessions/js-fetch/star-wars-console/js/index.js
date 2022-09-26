console.clear();

const url = 'https://swapi.dev/api/people';

async function fetchData() {
	try {
		const response = await fetch(url); // ?
		if (!response.ok) {
			console.error('Bad response');
		} else {
			const data = await response.json();
			console.log(data);
		}
	} catch (error) {
		console.error(error);
	}
}

fetchData();
