# React Arrays: Users

The `./src/App.jsx` file should dynamically display a card for each of the nine `USERS` imported from the `db.jsx` file.

For now, however, there is only one card. Let's fix this with our newly acquired knowledge about arrays in React.

After that, you can implement two more features to make the user overview even more shiny!

## Tasks

1. Use `Array.map` to create a card for each user in the `USERS` array. Make sure to add a unique key to each card.

2) Switch to the card component and use `Array.map` to create a `Tag` for each role in the roles array of a user. Make sure to add a unique key to each tag - in this instance, feel free to use the role itself as a key.

3. At last, refactor the `Tag` component: it should receive an additional class called 'tag--highlight' if the `tag` prop equals the string 'admin' (compare the `Tag.css` file).

## Notes

- You only have to touch the files `./src/App.jsx`, `./src/Card.jsx`, and `./src/Tag.jsx`.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
