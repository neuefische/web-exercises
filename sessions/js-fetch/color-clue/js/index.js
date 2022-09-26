import {
	nameDisplay,
	submitButton,
	restartButton,
	restartScreen,
	background,
	IDLE_BACKGROUND_COLOR,
	colorObject,
	randomHex,
} from './utils.js';
import './initForm.js';

console.clear();

fetchNewColor();

// --v-- your code here --v--

function fetchNewColor() {
	const hexCode = randomHex();
}

// --^-- your code here --^--

restartButton.addEventListener('click', () => {
	fetchNewColor();
	background.style.backgroundColor = IDLE_BACKGROUND_COLOR;
	background.style.color = 'black';
	submitButton.classList.toggle('display--hidden');
	restartScreen.classList.toggle('display--hidden');
	background.classList.toggle('fast-transition');
});
