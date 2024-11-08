# React Arrays: Fruits

For now, the `./src/App.jsx` file uses a `Card` component to render the text "banana". This is easy to handle if you only have a single use case.

Most often, however, you have an array of objects and want to dynamically render a component (like `Card`) for each of these objects.

## Tasks

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

- Hint: check the `./src/components/Card.css` file for some cues as to how to handle having the colors change automatically

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
