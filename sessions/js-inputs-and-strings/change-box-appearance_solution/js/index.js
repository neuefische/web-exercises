/*
Goal: We have one box and three sliders. We want the box to change according to the values of the sliders when the slider controls are moved. 

Tasks:
- Add an event listener for every input element.
- If the slider control of inputColor is moved then the box should change its background color. Hint: You need to work with the hsl() functional notation for colors.
- If the slider control of inputRadius is moved then the border-radius of the box should change. If the control reaches the right end, then the box looks like a circle.
- If the slider control of inputRotation is moved then the box should rotate. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".
- Hint: Instead of working with "classnames" you need to use the property "style".


For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about set CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
*/

const boxEl = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener('input', () => {
  boxEl.style.backgroundColor = `hsl(${inputColor.value}, 70%, 60%)`;
});

inputRadius.addEventListener('input', () => {
  boxEl.style.borderRadius = `${inputRadius.value}%`;
});

inputRotation.addEventListener('input', () => {
  boxEl.style.transform = `rotate(${inputRotation.value}deg)`;
});
