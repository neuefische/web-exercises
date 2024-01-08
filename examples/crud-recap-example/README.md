# CRUD Recap Project

This project is an app that renders services provided by users, and allows their editing, creation and removal.

## API Endpoints

| Method | URL               | What it does          |
|--------|-------------------|-----------------------|
| GET    | /api/services     | Gets all services     |
| POST   | /api/services     | Creates new service   |
| GET    | /api/services/:id | Gets service by id    |
| PUT    | /api/services/:id | Edits service by id   |
| DELETE | /api/services/:id | Deletes service by id |

## Pages

Paths are relative to the `/pages` folder.

| File                            | URL                          | What it does                            |
|---------------------------------|------------------------------|-----------------------------------------|
| index.js                        | /                            | Displays all services                   |
| services/[id].js                | /services/:id                | Displays a service by given in          |
| dashboard/index.js              | /dashboard                   | Displays all services with edit actions |
| dashboard/services/create.js    | /dashboard/services/create   | Displays the create service form        |
| dashboard/services/[id]/edit.js | /dashboard/services/:id/edit | Displays the edit service form          |

## Development

### Local Development

First provide the MongoDB connection URL in the `.env.local` file:

```
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.tdm0q.mongodb.net/<DBNAME>?retryWrites=true&w=majority
```

Then install the dependencies using `npm i`.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run db:populate` to fill the db with some initial data.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
- `npm run db:populate` to populate the db with some fixtures
