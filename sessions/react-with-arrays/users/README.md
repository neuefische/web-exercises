# React Arrays: Users

The [`src/App.js`](./src/App.js) file should dynamically display a card for each of the nine `USERS` imported from the `db.js` file.

For now, however, there is only one card. Let's fix this with our newly acquired knowledge about arrays in React.

After that, you can implement two more features to make the user overview even more shiny!

## Task

1. Use `Array.map` to create a card for each user in the `USERS` array. Make sure to add a unique key to each card.

2) Switch to the card component and use `Array.map` to create a `Tag` for each role in the roles array of a user. Make sure to add a unique key to each tag - in this instance, feel free to use the role itself as a key.

3. At last, refactor the `Tag` component: it should receive an additional class called 'Tag--highlight' if the `tag` prop equals the string 'admin' (compare the `Tag.css` file).

## Notes

- You only have to touch the files [`src/App.js`](./src/App.js), [`src/Card.js`](./src/Card.js), and [`src/Tag.js`](./src/Tag.js).

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
