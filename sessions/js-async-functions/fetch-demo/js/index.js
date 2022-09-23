console.clear();

const fetchButton = document.querySelector('[data-js="fetch-button"]');

const apiUrl = 'https://example-apis.vercel.app/api/status';

fetchButton.addEventListener('click', async () => {
	fetchButton.disabled = true;
	fetchButton.textContent = 'Fetching...';

	const response = await fetch(apiUrl);
	console.log(response);

	fetchButton.disabled = false;
	fetchButton.textContent = 'Fetch';
});
