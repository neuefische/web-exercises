# Project Recipes - Maps

This project is an app that display location markers over on a [Leaflet.js](https://leafletjs.com/) map, and offers a location detail view too.

## API Endpoints

| Method | URL             | What it does     |
|--------|-----------------|------------------|
| GET    | /api/places     | Gets all places  |
| GET    | /api/places/:id | Gets place by id |


## Pages

Paths are relative to the `/pages` folder.

| File     | URL | What it does        |
|----------|-----|---------------------|
| index.js | /   | Displays all places |

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
