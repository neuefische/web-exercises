const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const api = 'https://example-apis.vercel.app/api/status';

async function checkIfAPIIsAvailable() {
	const response = await fetch(api);
}

button.addEventListener('click', () => {
	checkIfAPIIsAvailable();
});
