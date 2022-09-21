console.clear();

const runnerKeyframes = [{translate: '0 0'}, {translate: '180px 0'}];

const runnerAnimation = {duration: 2000, fill: 'forwards'};

const runner1 = document.querySelector('[data-js="runner"]:nth-of-type(1)');
const runner2 = document.querySelector('[data-js="runner"]:nth-of-type(2)');
const runner3 = document.querySelector('[data-js="runner"]:nth-of-type(3)');

const startRaceButton = document.querySelector('[data-js="start-race-button"]');

// You'll need to change something about this callback function:
//                                        |
//                                        v
startRaceButton.addEventListener('click', () => {
	startRaceButton.setAttribute('disabled', '');

	/**
	 * Hint 1:
	 * Use `.animate(runnerKeyframes, runnerAnimation)` to animate the runners
	 *
	 * Hint 2:
	 * The animate function returns an animation object that has a `finished`
	 * property that is a promise which resolves when the animation is done.
	 *
	 * Hint 3:
	 * The relay runners are already available in the global scope as `runner1`,
	 * `runner2` and `runner3`.
	 **/

	// --v-- write your code here --v--

	// --^-- write your code here --^--

	startRaceButton.removeAttribute('disabled');
});
