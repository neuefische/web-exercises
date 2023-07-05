# Recap Project 6: Tourio App

In this project you will build a Tourio App, the best friend of all travelers: it displays sights you want to visit and lets you edit them.

## Task

### Read Data

- Set up a database; use the [`lib/db.json` file](lib/db.json) to insert sample data.
- In `pages/api/index.js`, replace the `places` variable imported from `lib/db.js` with a `GET` request from your database.
- Do the same in `pages/api/[id]/index.js` for the details page.

### Create Form

- In `pages/create.js`, write the `addPlace` function to start a `POST` request.
- Write the `POST` API route in `pages/api/places/index.js`.
- Submitting the form should redirect the user to the homepage `/`.

### Update Entry

- In `pages/places/[id]/edit.js`, write the `editPlace` function to start a `PATCH` request.
- Write the `PATCH` API route in `pages/api/[id]/index.js`

### Delete Entry

- In `pages/places/[id].index.js`, write the `deletePlace` function to start a `DELETE` request.
- Write the `DELETE` API route in `pages/api/places/[id]/index.js`.

### Deploy to Vercel

- Deploy your app to Vercel and make sure the deployment can access the cloud database with the help of environment variables.

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
