# React Effects and Fetch: Pokémon API with Paging

We want to display a complete list of Pokémon, but the API only returns 20 Pokémon per request and uses pagination. Let's implement the logic to navigate through the individual pages.

## Tasks

### The "Next Page" Button

Open the file `./src/components/PokemonList.jsx`.

There is a button labeled "Next Page", but it currently has no functionality. Add the logic to load the next page of Pokémon.

> _Hint 1:_ You need a way to store the current page and update this value to load the next page.

> _Hint 2:_ Look at the URL parameter `?offset=` used in the `fetch` request. The API starts by returning the first 20 Pokémon. You need to modify the URL to fetch the next page. You can either keep track of the `offset` yourself or use the `next` value provided in the API response.

### The "Previous Page" Button

Can you adapt your solution for the button to navigate to the previous page?

You might notice that the app crashes when you are on the first page and click the "Previous Page" button. Can you implement a way to disable or hide the button when there is no previous page available?

> _Hint:_ The API response includes a `previous` value, which indicates if a previous page exists.

## Notes

- You only have to touch the `./src/components/PokemonList.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
