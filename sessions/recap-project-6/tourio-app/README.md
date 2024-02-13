# Recap Project 6: Tourio App

In this project you will build a Tourio App, the best friend of all travelers: it displays sights you want to visit and lets you edit them.

## Create the App

Build your own _Tourio App_ by running this command in your Terminal:

```bash
npx ghcd@latest spiced-academy/fs-web-exercises/tree/main/sessions/recap-project-6/tourio-app
```

Your repository in Github must be named `yourName-partnerName-tourio-app`

## Task

### Read Data

- Set up a database; use the [`lib/Tourio-db.places.json` file](lib/Tourio-db.places.json) to insert sample data.
- In `pages/api/index.js`, replace the `db_places` variable imported from `lib/db.js` with a `GET` request from your database.
- Do the same in `pages/api/places/[id]/index.js` for the details page.

### Create Form

- In `pages/create.js`, write the `addPlace` function to start a `POST` request.
- Write the `POST` API route in `pages/api/places/index.js`.
- Submitting the form should redirect the user to the homepage `/`.

### Update Entry

- In `pages/places/[id]/edit.js`, write the `editPlace` function to start a `PATCH` request.
- Write the `PATCH` API route in `pages/api/places/[id]/index.js`

### Delete Entry

- In `pages/places/[id]/index.js`, write the `deletePlace` function to start a `DELETE` request.
- Write the `DELETE` API route in `pages/api/places/[id]/index.js`.

### Deploy to Vercel

🚀 Deploy your app to Vercel and make sure the deployment can access the cloud database with the help of environment variables.

## Bonus

### Comment Section

- To add a comment section for each place, you'll need to create a database schema or collection to store comments associated with each place. Each comment should have a reference to the place it belongs to, such as a place ID.

- Set up a database; use the [`lib/Tourio-db.comments.json` file](lib/Tourio-db.comments.json) to insert sample data.

- Create a form in your place detail page pages/places/[id]/index.js that allows users to submit comments.

- Write a POST API route to handle comment submissions. This route should associate each comment with the appropriate place in your database.

- Implement a mechanism to retrieve and display comments for each place on the detail page.

## Development

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
