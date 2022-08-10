console.clear();
const nav = document.querySelector('[data-js="nav"]');
const endToast = document.querySelector('[data-js="end-toast"]');
const scrollBar = document.querySelector('[data-js="srcoll-bar"]');
const backButton = document.querySelector('[data-js="end-toast"] button');
/*
1. Scroll Bar

Write a function "calculateScrollPercentage" which calculates how much the user has
scrolled the page. (HINT: Remember to take the height of the window into account when
calculating the percentage)

2. Hide / Show Elements

Write a function "updatePositoinState" that does the following:
- if the user has scrolled to the bottom of the page, the function returns the string "bottom"
- if the user is at the top of the page, the function returns the string "top"
- otherwise the function returns the string "middle"

HINT: You can use the following attributes which you will need to solve the tasks:
- window.innerHeight: gives you the height of your window.
- document.body.clientHeight: gives you the height of the webpage
- window.scrollY: gives you the current scroll position (the position of the top edge of the window)
*/

function calculateScrollPercentage() {
	const percentage = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
	return percentage;
}

function getPositionState() {
	if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
		return 'bottom';
	}

	if (window.scrollY <= 0) {
		return 'top';
	}

	return 'middle';
}

let positionState = 'top';

window.addEventListener('scroll', event => {
	scrollBar.style.width = `${calculateScrollPercentage()}%`;

	// Update position state
	positionState = getPositionState();

	// Show / hide elements depending on position state
	if (positionState === 'bottom') {
		endToast.classList.remove('hidden');
	} else if (positionState === 'top') {
		nav.classList.remove('hidden');
	} else {
		endToast.classList.add('hidden');
		nav.classList.add('hidden');
	}
});

backButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
