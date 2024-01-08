# CRUD Recap Project

This project is an app that renders a recipe book, and allows their editing, creation and removal.

## API Endpoints

| Method | URL              | What it does         |
|--------|------------------|----------------------|
| GET    | /api/recipes     | Gets all recipes     |
| POST   | /api/recipes     | Creates new recipes  |
| GET    | /api/recipes/:id | Gets recipe by id    |
| PUT    | /api/recipes/:id | Edits recipe by id   |
| DELETE | /api/recipes/:id | Deletes recipe by id |

## Pages

Paths are relative to the `/pages` folder.

| File                 | URL                | What it does                    |
|----------------------|--------------------|---------------------------------|
| index.js             | /                  | Displays all recipes            |
| new.js               | /new               | Displays the create recipe form |
| recipes/[id].js      | /services/:id      | Displays a recipe by given `id` |
| recipes/edit/[id].js | /services/edit/:id | Displays the edit recipe form   |

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
