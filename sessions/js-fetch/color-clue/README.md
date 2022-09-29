# Color Clue

This project is a color guessing game: The user is presented the name of a color. The user then tries to choose the actual color value using the color selector input.

Clicking the `Guess` button reveals a percentage how close the user was to the actual color value associated with the name.

To get the names of the colors, we use the Color API.

Unfortunately, the game does not work because the fetch function to get data from the color api is not implemented. Let's fix this!

## Task

Check out the [fetch.js](./js/fetch.js) file: There is a `fetchNewColor()` function which creates a random hex code and creates the correct url to fetch data from the Color API.

Your task is to implement the fetch functionality:

1. Use the `fetch()` function to get data from the Color API.
2. Use the `.json()` method to parse the body of the response and convert it into an object.
3. Inspect the parsed object (e.g. by logging it to the console) and find the hex value and name of the closest named color.
4. Call the `setColorToGuess()` function with the hex value and name of the closest named color.
5. Guess colors! 🎉

Switch to the [fetch.js](./js/fetch.js) file and start coding!
