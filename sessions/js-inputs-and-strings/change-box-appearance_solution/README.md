# JS Inputs and Strings: Change Box Appearance

## Task

Change the appearance of the box according to the slider values (color, border radius, and rotation).

- [ ] Add an event listener for each input element.
- [ ] When the slider control of `inputColor` is moved, change the background color of the box. _Hint:_ Use the `hsl()` function to set the color dynamically.
- [ ] When the slider control of `inputRadius` is moved, change the border radius of the box. If the slider is at its maximum, make the box circular.
- [ ] When the slider control of `inputRotation` is moved, rotate the box. _Hint:_ Use the `transform` CSS property with a `rotate` value in `deg`.

Hint: You can modify styles directly by accessing the `style` property of the box, similar to how you work with `classList`.

For more details, refer to these MDN resources:

- [Range inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
- [hsl() color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)
- [Transform and rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Using the style property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

## Notes

- You only have to touch the `./js/index.js` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

### Scripts

You can use the following command:

- `npm run start` to start a development server
