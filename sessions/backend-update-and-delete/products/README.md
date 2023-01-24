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

Your task is to add the functionality for updating and deleting a product. The buttons to do so should be visible on the Product Details Page and after sending the request, the user is redirected to the Overview Page.

### `PUT` Request

#### Add a `PUT` route

Switch to [`pages/api/products/[id].js`](./pages/api/products/[id].js) and write the code for the `request.method` `PUT` :

- _Wait_ for `Product.findByIdAndUpdate(id, { $set: request.body, })`.
- Respond with a status `200` and the message `{ status: "Product successfully updated." }`.

#### Refactor the `ProductForm` component

For now, the `ProductForm` component sends a `POST` request to your database. We want to reuse the component for editing products and sending `PUT` requests as well.

Switch to [`components/ProductForm/index.js`](./components/ProductForm/index.js).

Lift up all logic regarding the creating of the `productData` and the `fetch("/api/products")` to the [`pages/index.js`](./pages/index.js) file.

> 💡 This includes the initialization of `const products = useSWR("/api/products");` and the import of `useSWR`.

After doing so,

- wrap the logic into an `async` function called `handleAddProduct()`,
- pass `handleAddProduct()` the parameter `event`,
- in the return statement, pass `handleAddProduct` to the `ProductForm` component as a prop called `onSubmit`.

Switch back to [`components/ProductForm/index.js`](./components/ProductForm/index.js) and

- receive the `onSubmit` prop,
- call it inside of the `handleSubmit` and
- pass it the `event` as argument.

> 💡 Bonus: Pass another new prop to the `ProductForm` component to set the heading of the form dynamically ("Add a new Fish" is not a proper headline when updating the product, right?).

#### Send a `PUT` request

Updating a product should be possible from the details page, so [`pages/[id].js`](./pages/%5Bid%5D.js) is where all the frontend magic will happen.

Switch to [`pages/[id].js`](./pages/%5Bid%5D.js).

You will need the current product `id` and the `push` method from `next/router`:

- Add `import { useRouter } from "next/router";` at the top of the file.
- Create an instance with `const router = useRouter();`.
- Destructure `query: { id }` and `push` from `router`.

Implement `useSWRMutation` to update a database entry and refetch the data automatically:

- Add `import useSWRMutation from "swr/mutation";` at the top of the file.
- Paste the following code into the `ProductDetailsPage` component to set up `useSWRMutation`:

```js
async function updateProduct(url, { arg }) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
  }
}

const { trigger, isMutating } = useSWRMutation(
  `/api/products/${id}`,
  updateProduct
);
```

- Below this code, create a `handleEditProduct()` function:

  - it receives `event` as parameter,
  - it stores the submitted data in a variable called `productData` (Hint: `new FormData` and `Object.fromEntries` as already used)
  - it _waits_ for `trigger(productData)` and
  - uses `push("/")` to redirect to the overview page.

- Below `handleEditProduct()` (but above the return statement),
  - check whether `isMutating` is truthy and if so,
  - return a proper HTML element with the text "Submitting your changes."

Go to the return statement at the bottom of the file and pass `handleEditProduct` to the `Product` component as the `onSubmit` prop.

Switch to [`components/Product/index.js`](./components/Product/index.js) and implement an edit mode to show the `ProductForm` on button click:

- Create a state called `isEditMode` and initialize it with `false`.
- In the return statement, add a `<button>` with
  - `type="button"`,
  - `onClick={() => { setIsEditMode(!isEditMode); }}`,
  - and a proper text.
- In the return statement, display the `ProductForm` component depending on the `isEditMode` state (Hint: `isEditMode && ...`).

Open [`localhost:3000/`](http://localhost:3000/) in your browser, switch to a details page, edit a fish and be happy about your shop being expanded!

### `DELETE` Request

#### Add a `DELETE` route

Switch to [`pages/api/products/[id].js`](./pages/api/products/[id].js) and write the code for the `request.method` `DELETE` :

- _Wait_ for `Product.findByIdAndDelete(id)`.
- Respond with a status `200` and the message `{ status: "Product successfully deleted." }`.

#### Send a `DELETE` request

Deleting a product should be possible from the details page.

Switch to [`components/Product/index.js`](./components/Product/index.js) and implement a delete button:

- The `Product` receives a new prop called `onDelete`.
- In the return statement, add a `<button>` with
  - `type="button"`,
  - `onClick={() => onDelete(id)}`,
  - and a proper text.

Switch to [`pages/[id].js`](./pages/%5Bid%5D.js) and write a `handleDeleteProduct` function:

- _Wait_ for a `fetch()` with two arguments:
  - the url `/api/products/${id}` and
  - an options object `{ method: "DELETE" }`
- Save the result in a variable called `response`.
- If the `response` is `ok`,
  - _wait_ for `response.json()` and use `push("/")`.
- If the `response` is not `ok`, log the `response.status` as an error to the console.

- In the return statement of the `ProductDetailsPage`, pass `handleDeleteProduct` to the `Product` component as a prop called `onDelete`.

Open [`localhost:3000/`](http://localhost:3000/) in your browser, switch to a details page, delete a fish and be happy about your shop being expanded!

### Resources

⬇️ You can [**download the data and assets for the Fish Shop here**](./resources.zip?raw=true).

- Unzip the file to get the `resources` folder.
- The files are already in the correct structure for the app.
  - `products.json` contains the data for the all fish,
  - `reviews.json` contains the data for all reviews.
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
