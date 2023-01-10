# Backend Update and Delete: Products

In this challenge, you'll further expand a fish shop. This time, you'll update and delete data in your local MongoDB using `mongoose`.

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
- when clicking a product in the list, you'll be redirected to a details page.

Your task is to add the functionality for updating and deleting a product. The buttons to do so should be visible on the Product Details Page and after sending the request, the user is redirected to the OverView Page.

### `PUT` Request

#### Add a `PUT` route

Switch to [`pages/api/products/index.js`](./pages/api/products/index.js) and write the code for the `request.method` `PUT` :

- Declare a variable `productToUpdate`.
- Initialize `productToUpdate` with `await Product.findByIdAndUpdate(id, { $set: request.body, })`.
- Respond with a status `200` and the message `{ status: "Product successfully updated." }`.

#### Refactor the `ProductForm` component

For now, the `ProductForm` component sends a `POST` request to your database. We want to reuse the component for editing products and sending `PUT` requests as well.

Switch to [`components/ProductForm/index.js`](./components/ProductForm/index.js).

Lift up all logic regarding the `fetch("/api/products")` to the [`pages/index.js`](./pages/index.js) file and

- wrap it into an `async` function called `handleAddProduct()`,
- pass `handleAddProduct()` the parameter `productData`,
- in the return statement, pass `handleAddProduct` to the `ProductForm` component as a prop called `onSubmit`.

Switch back to [`components/ProductForm/index.js`](./components/ProductForm/index.js) and

- receive the `onSubmit` prop,
- call it inside of the `handleSubmit` and
- pass it the `productData` as argument.

> 💡 Bonus: Pass another new prop to the `ProductForm` component to set the heading of the form dynamically ("Add a new Fish" is not a proper headline when updating the product, right?).

#### Send a `PUT` request

Updating a product should be possible from the details page, so [`pages/[id].js`](./pages/%5Bid%5D.js) is where all the frontend magic will happen.

Switch to [`pages/[id].js`](./pages/%5Bid%5D.js).

Implement an edit mode to show the `ProductForm` on button click:

- Create a state called `isEditMode` and initialize it with `false`.
- In the return statement, add a `<button>` with
  - `type="button"`,
  - `onClick={() => { setIsEditMode(!isEditMode); }}`,
  - and a proper text.
- In the return statement, display the `ProductForm` component depending on the `isEditMode` state (Hint: `isEditMode && ...`).

You will need the current product `id` and the `push` method from `next/router`:

- Add `import { useRouter } from "next/router";` at the top of the file.
- Create an instance with `const router = useRouter();`.
- Destructure `query: { id }` and `push` from `router`.

To Do: implement `useSWRMutation` as shown in the demo

<!--
THIS IS FROM THE LAST SESSION: USE ONLY FOR COMPARISON

Switch to [`components/ProductForm/index.js`](./components/ProductForm/index.js):

- There already is a `handleSubmit` function which creates a `productData` object with all relevant data.

Your task is to write a fetch for you newly created `POST` route and send the data to your database.

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
}
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

Open [`localhost:3000/`](http://localhost:3000/) in your browser, submit a new fish and be happy about your shop being expanded! -->

Open [`localhost:3000/`](http://localhost:3000/) in your browser, switch to a details page, edit a fish and be happy about your shop being expanded!

### `DELETE` Request

#### Add a `DELETE` route

Switch to [`pages/api/products/index.js`](./pages/api/products/index.js) and write the code for the `request.method` `DELETE` :

- _Wait_ for `Product.findByIdAndDelete(id)`.
- Respond with a status `200` and the message `{ status: "Product successfully deleted." }`.

#### Send a `DELETE` request

Deleting a product should be possible from the details page.

Switch to [`pages/[id].js`](./pages/%5Bid%5D.js).

Implement a delete button:

- In the return statement, add a `<button>` with
  - `type="button"`,
  - `onClick={handleDeleteProduct}`,
  - and a proper text.

Go above the return statement and write the `handleDeleteProduct` function:

To Do: implement `delete` functionality depending on the demo

<!-- Open [`localhost:3000/`](http://localhost:3000/) in your browser, switch to a details page, delete a fish and be happy about your shop being expanded! -->

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
