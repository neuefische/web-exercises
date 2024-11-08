# CSS Structure: Custom Properties

The CSS code in this challenge references three different colors multiple times. Use custom properties (variables) to extract them for easier maintenance.

## Tasks

Open the `./css/styles.css` file and identify the three colors that are used repeatedly. Note that not all instances of the same color follow the same syntax.

In a new `:root` selector, define three custom properties (variables) for these colors. Use the following names:

- `--color-granite` for the dark gray
- `--color-nemo` for the orange
- `--color-foam` for the white

> 💡 Maintain a consistent `--color-<name>` naming convention.  
> Ensure all color values use the same syntax (e.g., hex `#ffffff` or `rgb()`).

Replace all color references with the new custom properties (variables) you've created.

Verify that the design still appears as it did before.

> 💡 Use the [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (`var()`) syntax.

Switch to the `./css/styles.css` file and implement the custom properties!

### Bonus

Review the stylesheet for other values that could benefit from extraction. Examples might include the `4px` border-radius, letter-spacing, or spacing values like `8px`, `16px`, `32px`, etc.

> 💡 Not everything should be a custom property. Only extract values that are **used multiple times** and that might **change together** in the future.

> 💡 Naming your custom properties descriptively helps clarify their use. For example, for a border-radius, consider naming it `--border-radius-small`, etc.

## Notes

- You only have to touch the `./css/styles.css` file.

## Development

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

### Scripts

You can use the following command:

- `npm run start` to start a development server
