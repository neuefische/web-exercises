# CSS Structure: Custom Properties

The CSS Code in this challenge has multiple references to three different colors. Make use of custom properties (variables) to extract them.

## Task

Check the [`css/styles.css`](./css/styles.css) file and find the three colors that are used multiple times. Unfortunately not all references to the same color use the same syntax.

Create a new `:root` selector and define three custom properties (variables) for the three colors. Use the following names:

- "granite" for the dark gray
- "nemo" for the orange
- "foam" for the white

> 💡 Use a consistent `--color-<name>` naming for you properties and make sure that all colors use the same syntax (e.g. hex `#ffffff`).

Replace all references to the colors with the custom properties (variables).

> 💡 Use the [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (`var()`) syntax.

Switch to the [`css/styles.css`](./css/styles.css) file create some custom properties!

## Bonus

Check the stylesheet for other values that might warrant extraction. Some prime examples may include the border radius of `4px` but you might find other things, too.

> 💡 Not everything should be a custom property. Only extract values that are used multiple times and that might change together.

> 💡 It's good practice to name your custom properties (variables) in a way that makes it clear what they are used for. For example, if you have a custom property for the border radius, you might call it `--border-radius-small`, etc..

## Notes

- You only have to touch the [`css/styles.css`](./css/styles.css) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
