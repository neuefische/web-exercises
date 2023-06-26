# Backend Api Routes: Random Character

In this challenge, you will

- create an api route which returns a character object with random values using [the `chance` package](https://chancejs.com/) and
- consume this endpoint with `SWR` to render the information in the browser.

## Task

### Create the API

Create an api route which returns a character object with random values using `chance`.

You can use the following hints as guideline:

- Create the file structure `pages/api/random-character.js`.
- Switch to `pages/api/random-character.js`; write a handler function which
  - responds with a `200` status code and
  - with a character object containing random information (see example below);
  - parses the character object with the .json() method.
- To create random values, use `chance`:
  - import via `import Chance from "chance";`
  - create a new instance with `const chance = new Chance();`
  - create a `character` object and use the methods of `chance` like in the example below;
  - feel free to add keys as you wish: every character should have a [twitter name](https://chancejs.com/web/twitter.html) and a [geohash](https://chancejs.com/location/geohash.html), right?

```js
// example character object with random values
const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  // ... some more keys here ...
};
```

Check your api route:

- run `npm run dev` and
- switch to the browser and open `/api/random-character`: you should now see the keys of the character object with random values.

### Create the Frontend

You have now prepared an api route responding with a random character – let's use it to display the data for the user!

- Switch to `pages/index.js`;
- Import the `useSWR` hook, write a fetcher for it and fetch the route `/api/random-character`.
- Adapt the return statement to display the `data` on screen.
- Open the browser: the home page under `/` should now show your fetched data!

## Notes

- You only have to touch the `./pages/index.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
