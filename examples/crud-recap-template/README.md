# CRUD Recap Project Template

This is a template for practicing CRUD activities.

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
