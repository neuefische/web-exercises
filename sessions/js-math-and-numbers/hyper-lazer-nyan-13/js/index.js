console.clear();

// Get DOM Elements
const laser = document.querySelector('[data-js="laser"]');
const cat = document.querySelector('[data-js="cat"]');
const scoreDisplay = document.querySelector('[data-js="scoreDisplay"]');
const menu = document.querySelector('[data-js="menu"]');
const menuText = menu.querySelector('[data-js="menuText"]');
const restartButton = menu.querySelector('[data-js="restartButton"]');

// Get a random int between a min & max int

// --v-- Edit code here --v--

function randomNumber(min, max) {
  return 0;
}

function countClick() {}

// --^-- Edit code here --^--

// State
let missedClicks = 0;

// Run away
laser.addEventListener("mouseover", () => {
  laser.style.transform = `translate(${randomNumber(30, 70)}vw,${randomNumber(
    30,
    70
  )}vh)`;
});

// Count miss
document.addEventListener("click", () => {
  countClick();
  scoreDisplay.textContent = `missed clicks: ${missedClicks}`;
});

// Win
laser.addEventListener("click", () => {
  toggleVisibility();
  menuText.textContent = `You caught the div and missed ${missedClicks} times!`;
});

// Restart
restartButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleVisibility();
  missedClicks = 0;
  scoreDisplay.textContent = `missed clicks: ${missedClicks}`;
});

// Toggle visibilities
function toggleVisibility() {
  menu.classList.toggle("display--none");
  laser.classList.toggle("display--none");
  scoreDisplay.classList.toggle("display--none");
}

// Let the cat follow the mouse ;)
document.addEventListener("mousemove", (event) => {
  cat.style.transform = `translate(calc(${event.clientX}px - 50%),calc(${event.clientY}px - 50%))`;
});
