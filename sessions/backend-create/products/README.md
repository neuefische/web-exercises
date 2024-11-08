# Backend Create: Products

In this challenge, you'll further expand a fish shop. This time, you'll create new data in your MongoDB using `mongoose` and refresh the UI programmatically to display the new product immediately.

> 💡 You can use this template as a starting point. But if you are far enough along with your own Fish Shop App, please use that instead.

## Tasks

### Prepare your Database

If you have not done so, use MongoDB Atlas to create a database:

- the database should be called `fish-shop`,
- there should be two collections: `products` and `reviews`,
- download and extract the [resources](README.md#resources) and
- import the data of the `products.json` file into your `products` collection;
- import the data of the `reviews.json` file into your `reviews` collection.

Create a `.env.local` file based on the [`.env.local.example`](./.env.local.example). Be sure to spell the name of the database (`fish-shop`) correctly and replace the placeholders with your MongoDB values (`username`, `password`, `cluster-name`).

### Introduction

Run `npm run dev` and open [localhost:3000](http://localhost:3000) in your browser.

Have a look around:

- there is an overview page with a form to add a new fish and a list of all products below that form;
- when clicking a product in the list, you'll be redirected to a details page;
- note that submitting the form does not do anything right now.

Your task is to refactor the app so that submitting the form creates a new entry in your MongoDB and refreshes the page to show all products (including the new one).

### Add a `POST` route

Switch to `./pages/api/products/index.js` and write the code for the `request.method` `POST` :

- Use a `try...catch` block.
- Try to:
  - Save the product data submitted by the form - accessible in `request.body` - to a variable called `productData`.
  - use `Product.create` with the `productData` to create a new document in our collection.
  - _Wait_ until the new product was saved.
  - Respond with a status `201` and the message `{ status: "Product created." }`.
- If an error occurs:
  - Log the error to the console.
  - Respond with a status `400` and the message `{ error: error.message }`.

Submitting the form will not yet work because the form does not know that you've created a `POST` route it can use.

### Send a `POST` request

Switch to `./components/ProductForm/index.js`:

- There already is a `handleSubmit` function which creates a `productData` object with all relevant data.

Your task is to fetch your new `POST` route and send the data to your database. After that use `mutate` from `useSWR` to refetch the data from the database.

- call `useSWR` in your `ProductForm` component with the API endpoint and destructure the `mutate` method.
- inside the handleSubmit function:
  > 💡 Hint: have a look at the handout if you get stuck here.
- send a "POST" request with `fetch` using the following options as the second argument

```js
{
  method: "POST",
headers: {
  "Content-Type": "application/json",
  },
body: JSON.stringify(???),
}
```

- use the productData from the form input as the body of the request
- await the response of the fetch, if the fetch was successful, call the `mutate` method to trigger a data revalidation of the useSWR hooks

Open [`localhost:3000/`](http://localhost:3000/) in your browser, submit a new fish and be happy about your shop being expanded!

### Resources

You can find the fish shop data in [this folder](./resources/).

- The files are already in the correct structure for the app.
  - `products.json` contains the data for the all fish,
  - `reviews.json` contain the data for all reviews.
- Import them into the correct collection of your MongoDB when you are asked to.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
