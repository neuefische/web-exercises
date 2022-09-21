const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const api = 'https://example-apis.vercel.app/api/status';

async function checkIfAPIIsAvailable() {
	try {
		icon.textContent = '⏳';
		const response = await fetch(api);
		if (response.ok) {
			icon.textContent = '✅';
		} else {
			icon.textContent = '❌';
		}
	} catch (error) {
		console.error(error);
	}
}

button.addEventListener('click', () => {
	checkIfAPIIsAvailable();
});
