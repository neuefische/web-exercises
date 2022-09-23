console.clear();

const blockButton = document.querySelector('[data-js="block-button"]');
const textarea = document.querySelector('[data-js="textarea"]');

function blockMainThreadFor5Seconds() {
	const start = Date.now();
	while (Date.now() - start < 5000) {
		// Do nothing
	}
}

blockButton.addEventListener('click', () => {
	blockButton.disabled = true;

	textarea.focus();

	console.log('start blocking');

	// Small delay to allow the textarea to get focus
	setTimeout(() => {
		blockMainThreadFor5Seconds();

		console.log('done blocking');

		blockButton.disabled = false;
	}, 100);
});
