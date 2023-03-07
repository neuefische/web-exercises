# Backend Create: Products

In this challenge, you'll further expand a fish shop. This time, you'll create new data in your local MongoDB using `mongoose` and refresh the UI programmatically to display the new product immediately.

> 💡 You can use this template as a starting point. But if you are far enough along with your own Fish Shop App, please use that instead.

## Task

### Prepare your Database

If you have not done so, use MongoDB Compass to create a database:

- the database should be called `fish-shop`,
- there should be two collections: `products` and `reviews`,
- download and extract the [resources](README.md#resources) and
- import the data of the `products.json` file into your `products` collection;
- import the data of the `reviews.json` file into your `reviews` collection.

Create a `.env.local` file based on the [`.env.local.example`](./.env.local.example). Be sure to spell the name of the database (`fish-shop`) correctly.

### Introduction

Run `npm run dev` and open `localhost:3000` in your browser.

Have a look around:

- there is an overview page with a form to add a new fish and a list of all products below that form;
- when clicking a product in the list, you'll be redirected to a details page;
- note that submitting the form does not do anything right now.

Your task is to refactor the app so that submitting the form creates a new entry in your local MongoDB and refreshes the page to show all products (including the new one).

### Add a `POST` route

Switch to [`pages/api/products/index.js`](./pages/api/products/index.js) and write the code for the `request.method` `POST` :

- Use a `try...catch` block.
- Try to:
  - Save the product data submitted by the form - accessible in `request.body` - to a variable called `productData`.
  - Pass the `productData` a `new Product(data_goes_here)` and save it in a variable called `product`.
  - _Wait_ until the new product was saved in the database with `product.save()`.
  - Respond with a status `201` and the message `{ status: "Product created." }`.
- If an error occurs:
  - Log the error to the console.
  - Respond with a status `400` and the message `{ error: error.message }`.

Submitting the form will not yet work because the form does not know that you've created a `POST` route it can use.

### Send a `POST` request

Switch to [`components/ProductForm/index.js`](./components/ProductForm/index.js):

- There already is a `handleSubmit` function which creates a `productData` object with all relevant data.

Your task is to write a fetch for your newly created `POST` route and send the data to your database.

- Fetch the route `"/api/products"`; `await` the return value and save it in a variable called `response`.
- As a second argument, pass an object to the `fetch()` method which contains
  - the `method` set to `POST`,
  - the `body` set the `JSON.stringify()` of `productData`, and
  - an `headers` object with `"Content-Type": "application/json"`.
  - The object should look like the following:

```js
{
method: "POST",
headers: {
  "Content-Type": "application/json",
  },
body: JSON.stringify(productData),
}
```

Before handling the `response`,

- go to the top of the file and import `useSWR` from `swr`;
- within the function body of the `ProductForm` (but not inside of the `handleSubmit` function), add `const products = useSWR("/api/products");` to get access to `/api/products`.

Now, expand the `handleSubmit` function:

- If the `response` is `ok`,
  - _wait_ for the `response` and use its `.json()` method to produce a JavaScript object;
  - use `products.mutate()` to trigger a new `GET` request for all products (otherwise, the newly added product will not be displayed until you reload manually),
  - reset the form with the `event.target` interface.
- If the `response` is not `ok`, log the `response.status` as an error to the console.

Open [`localhost:3000/`](http://localhost:3000/) in your browser, submit a new fish and be happy about your shop being expanded!

### Resources

⬇️ You can [**download the data and assets for the Fish Shop here**](./resources.zip?raw=true).

- Unzip the file to get the `resources` folder.
- The files are already in the correct structure for the app.
  - `products.json` contains the data for the all fish,
  - `reviews.json` contain the data for all reviews.
- Import them into the correct collection of your local MongoDB when you are asked to.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
