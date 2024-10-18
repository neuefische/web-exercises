# Recap Project 6: Tourio App

In this project you will build a Tourio App, the best friend of all travelers: it displays sights you want to visit and lets you edit them.

## Task

### Read Data

- Set up a database; use the [`lib/db.json` file](lib/db.json) to insert sample data.
- In `pages/api/places/index.js`, replace the `places` variable imported from `lib/db.js` with a `GET` request from your database.
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

### Deploy your Project to Vercel

Follow [these instructions](https://github.com/neuefische/web-protocol-template/blob/main/docs/deployment-vercel.md) to deploy the project to Vercel.

#### Vercel and MongoDB Atlas (environment variables)

When deploying an application to Vercel, the app is not immediately able to connect with your cloud database. This is because the authentication information (user and password) is stored in a `.env.local` file which is only available to your local development environment. You can't upload this file to Vercel because it contains sensitive information. This is why we added the `.env.local` file to the `.gitignore` file.

To make the app work on Vercel, we need to provide the authentication information in a different way. This is where environment variables come in. Environment variables are a way to store sensitive information in a secure way. You can read more about environment variables in the [Vercel docs](https://vercel.com/docs/projects/environment-variables).

This is why we need to provide Vercel with the access details.

#### Connecting Vercel with MongoDB Atlas

1. In the dashboard of your Vercel project, navigate to "Settings".

2. In the left-hand navigation, choose "Environment Variables".

   1. Add the key (`MONGODB_URI`) and the value (`mongodb+srv...`)
   2. Tick all environments (Production, Preview, and Development).
   3. Click "Save".

3. At the bottom of this page, you should now see a new environment variable

4. Redeploy your application:

   1. In the main navigation, choose "Deployments".
   2. Open the three dots next to your last deployment and choose "Redeploy".

5. If there's a popup, hit the "Redeploy" button again.

6. Congratulations, you are done! Open the Vercel URL of your project to see that your deployed application has now access to the cloud database.

## Bonus

### Comment Section

- To add a comment section for each place, you'll need to create a database schema or collection to store comments associated with each place. Each comment should have a reference to the place it belongs to, such as a place ID.

- Use the [`lib/db_comments.json` file](lib/db_comments.json) to insert sample data.

- Replace the value of `placeId` in each comment with one of the place id strings in your MongoDB. You can open MongoDB Atlas and checkout your places collection to find fitting ids.

- Write a POST API route to handle comment submissions. This route should associate each comment with the appropriate place in your database.

- Implement a mechanism to retrieve, display and delete comments for each place on the detail page.

- Consider the case where a place is deleted. Ensure associated comments are also removed to avoid orphaned data in your database.

## Development

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
