# React Effects and Fetch: Pokémon API with Paging

We want to display a list of all Pokémon, but the API returns only `20` Pokémon at a time and has multiple pages. Let's write down the logic to browse through the individual pages.

## Task

### The "Next Page" button

Open the file `./src/components/PokemonList.js`.

There is a button to show the next page, but it has no functionality yet. Try to find a way to load the next page.

> _Hint 1:_ You need a way to store which page you are displaying right now and be able to update this value to the next page.

> _Hint 2:_ Have a look at the URL parameter `?offset=` used for `fetch`. The API starts by giving you the first `20` Pokémon. In the end the URL needs to change. You can either keep track of the offset yourself, or use the value given and `next` in the API response.

### The "Previous Page" button

Can you adopt your solution for the button to show the previous page?

You might experience that the app crashes when you are on the first page and click on the "Previous Page" button. Can you find a way to hide the button on the first page?

> _Hint:_ There is also a `previous` value given in the API response.

## Notes

- You only have to touch the `./src/components/PokemonList.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
