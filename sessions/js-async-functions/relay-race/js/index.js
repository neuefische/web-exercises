console.clear();

const runnerKeyframes = [{translate: '0 0'}, {translate: '180px 0'}];

const runnerAnimation = {duration: 2000, fill: 'forwards'};

const runner1 = document.querySelector('[data-js="runner"]:nth-of-type(1)');
const runner2 = document.querySelector('[data-js="runner"]:nth-of-type(2)');
const runner3 = document.querySelector('[data-js="runner"]:nth-of-type(3)');

const startRaceButton = document.querySelector('[data-js="start-race-button"]');

// You'll need to change something about this callback function:
//                                         ↙️
startRaceButton.addEventListener('click', () => {
	startRaceButton.setAttribute('disabled', '');

	/**
	 * Hint 1:
	 * The relay runners are already available in the global scope as `runner1`,
	 * `runner2` and `runner3`.
	 *
	 * Hint 2:
	 * Use `.animate(runnerKeyframes, runnerAnimation)` on the runner elements
	 * to animate the runners.
	 * You may need to store the result of this function call inside a variable
	 * to access its properties.
	 *
	 * Hint 3:
	 * The animate function returns an animation object that has a `finished`
	 * property that is a promise which resolves when the animation is done.
	 **/

	// --v-- write your code here --v--

	// --^-- write your code here --^--

	startRaceButton.removeAttribute('disabled');
});
