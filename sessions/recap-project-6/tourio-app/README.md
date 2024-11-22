# Recap Project 6: Tourio App

In this project, your team will create **Tourio**, an app designed for travelers.

This is a group project, so please create **only one project per group** following the [guide in the template section](./README.md#template).

## Overview

In this project, you will build **Tourio**—the ultimate travel companion. Tourio allows users to view a list of sights they want to visit, with the ability to add, edit, or remove entries to keep their travel plans organized.

## Template

Please follow the instructions given in the `README.md` file.

1. Open your terminal and navigate to the folder where your projects are stored.
2. Execute the following command to create a new project based on a template:

   ```bash
   nnpx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/recap-project-6/tourio-app -i
   ```

3. Create a new empty repository on GitHub and add all group members as collaborators.
4. Link your local repository to the GitHub repository and push the code.
5. Each group member clones the repository to their local machine.
6. Follow the instructions in the `README.md` file.

> 💡 **Reminder**: Work on feature branches to avoid merge conflicts!

## Deploying Your Project

Follow [these instructions](https://github.com/wd-bootcamp/cohort-template/blob/main/docs/deployment-vercel.md) to deploy the project to Vercel.

### Vercel and MongoDB Atlas (environment variables)

When deploying an application to Vercel, the app is not immediately able to connect with your cloud database. This is because the authentication information (user and password) is stored in a `.env.local` file which is only available to your local development environment. You can't upload this file to Vercel because it contains sensitive information. This is why we added the `.env.local` file to the `.gitignore` file.

To make the app work on Vercel, we need to provide the authentication information in a different way. This is where environment variables come in. Environment variables are a way to store sensitive information in a secure way. You can read more about environment variables in the [Vercel docs](https://vercel.com/docs/projects/environment-variables).

This is why we need to provide Vercel with the access details.

### Connecting Vercel with MongoDB Atlas

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

## Tasks

### Read Data

- Set up a database. Use the [`lib/db.json` file](lib/db.json) to insert sample data.
- In `pages/api/places/index.js`, replace the `places` variable imported from `lib/db.js` with a `GET` request from your database.
- Do the same in `pages/api/[id]/index.js` for the details page.

### Create Form

- In `pages/create.js`, write the `addPlace` function to start a `POST` request.
- Write the `POST` API route in `pages/api/places/index.js`.
- Submitting the form should redirect the user to the homepage `/`.

### Update Entry

- In `pages/places/[id]/edit.js`, write the `editPlace` function to start a `PUT` request.
- Write the `PUT` API route in `pages/api/[id]/index.js`

### Delete Entry

- In `pages/places/[id].index.js`, write the `deletePlace` function to start a `DELETE` request.
- Write the `DELETE` API route in `pages/api/places/[id]/index.js`.

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
