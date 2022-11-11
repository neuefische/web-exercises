# React Arrays: Fruits

For now, the [`src/App.js`](./src/App.js) file uses a `Card` component to render the text "banana". This is easy to handle if you only have a single use case.

Most often, however, you have an array of objects and want to dynamically render a component (like `Card`) for each of these objects.

## Task

Create an array 'fruits'. It should contain at least 5 objects which all have the properties 'name', 'id', 'color', e.g.:

```
{
  id: 1337,
  name: '🍌 Banana',
  color: 'yellow',
}
```

- Hint: the ids need to be unique.

Use the array method `map` to create a Card component for each fruit in your array. Use the name of each object as the text of the component and the id as the key prop.

## Bonus

Change the `Card` component so that it receives a `color` prop and set the background-color of the Card to this value. Use the color property of each fruit object for this prop.

- Hint: check the [`src/components/Card.css`](./src/components/Card.css) file for some cues as to how to handle having the colors change automatically

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
