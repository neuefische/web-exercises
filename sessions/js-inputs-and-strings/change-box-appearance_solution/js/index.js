console.clear();

const boxElement = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener('input', () => {
  boxElement.style.backgroundColor = `hsl(${inputColor.value}, 70%, 60%)`;
});

inputRadius.addEventListener('input', () => {
  boxElement.style.borderRadius = `${inputRadius.value}%`;
});

inputRotation.addEventListener('input', () => {
  boxElement.style.transform = `rotate(${inputRotation.value}deg)`;
});
