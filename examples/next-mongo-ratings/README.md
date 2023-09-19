# Project Recipes - Nested Resources

This project is an app that lists pets, and allow people to rate them. How people could rate a pet below 5/5 is beyond us though.

## API Endpoints

| Method | URL                              | What it does         |
|--------|----------------------------------|----------------------|
| GET    | /api/pets                        | Gets all pets        |
| GET    | /api/pets/:id                    | Gets pet by id       |
| POST   | /api/pets/:id/ratings            | Rates pet            |
| DELETE | /api/pets/:id/ratings/:rating_id | Deletes rating by id |


## Pages

Paths are relative to the `/pages` folder.

| File         | URL       | What it does               |
|--------------|-----------|----------------------------|
| index.js     | /         | Displays the latest 6 pets |
| pets.js      | /pets     | Displays all pets          |
| pets/[id].js | /pets/:id | Displays a pet by given id |

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
