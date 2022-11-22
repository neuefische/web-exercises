# js-functions: Pizza Analyzer

Pizza is amazing. So we want the most pizza for our money. Lets build a tool to compare two pizza sizes and gives us the net plus in pizza area.

## Task

### Calculate the Pizza Gain

First, we want to calculate the difference of the two pizza areas for two given pizza diameters. For that, do the following:

1. Write a function `calculatePizzaGain` which expects the two diameters of the two pizzas: `diameter1` and `diameter2`. (Not the radii of the pizzas!)
2. Inside this function, calculate the areas of both pizzas. (Hint: you can find the formula for that online)
3. Calculate the pizza gain in percent relative to the first pizza (Hint: the formula is: `(area2 - area1) / area1 * 100)`
4. Set the `textContent` of the output element to that value.
5. Inside both event listeners, save the current values of both pizza inputs in two variables `pizzaSize1` and `pizzaSize2` (Hint: you can use the queried elements and get their value like this: `pizzaInput.value`)
6. Now call the function and pass in the two pizza sizes as the arguments.

### Change pizza dipslay sizes

Great! Now we know how much pizza we gain if we choose the second pizza. But we don't have any visual relations between these two numbers. So lets adapt the pizza displays.

1. Write a function `updatePizzaDisplay` which has two parameters: `pizzaElement` - the queried DOM element of the respective pizza and `newSize` which is the new size of that pizza.
2. Calculate the new display size of the pizza element (Hint: the formula is: newSize / 24 \* 100).
3. Set the width of the `pizzaElement` to this new value (Hint: you can use `pizzaElement.style.width` for that).
4. Call this function in both event listeners and pass in the correct pizza element and the correct pizza size.

### Extra: Change the Output Background

Lets update the background of the output section to indicate whether we gain or loose pizza if we choose pizza 2.

1. Write a function `updateOutputDisplay` with two parameters: `size1` and `size`.
2. Set the background color of the `outputSection` to "var(--red)", if we loose pizza. Otherwise, the background color should be set to "var(--green)"
3. Use this function in both event listeners with the correct sizes as arguments.

   > 💡 `var(--<variable-name>)` is how you can use predefined variables in CSS. In this case, both color codes are stored in the variables `--red` and `--green` on the `:root` element of the HTML document (have a look into the CSS file!).

## Notes

- You only have to touch the [`js/index.js`](./js/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
