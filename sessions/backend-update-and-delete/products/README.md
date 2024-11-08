# Backend Update and Delete: Products

In this challenge, you'll further expand a fish shop. This time, you'll update and delete data in your MongoDB using `mongoose`.

> 💡 You can use this template as a starting point. But if you are far enough along with your own Fish Shop App, please use that instead.

## Tasks

### Prepare your Database

If you have not done so, use MongoDB Atlas to create a database:

- the database should be called `fish-shop`,
- there should be two collections: `products` and `reviews`,
- download and extract the [resources](README.md#resources) and
- import the data of the `products.json` file into your `products` collection;
- import the data of the `reviews.json` file into your `reviews` collection.

Create a `.env.local` file based on the [`.env.local.example`](./.env.local.example). Be sure to spell the name of the database (`fish-shop`) correctly.

### Introduction

Run `npm run dev` and open [localhost:3000](http://localhost:3000) in your browser.

Have a look around:

- there is an overview page with a form to add a new fish and a list of all products below that form;
- when clicking a product in the list, you'll be redirected to a details page.

Your task is to add the functionality for updating and deleting a product. The buttons to do so should be visible on the Product Details Page and after sending the request, the user is redirected to the Overview Page.

### `PUT` Request

#### Add a `PUT` route

Switch to [`pages/api/products/[id].js`](./pages/api/products/[id].js) and write the code for the `request.method` `PUT` :

- Get the updated product from the request body: `const updatedProduct = request.body;`
- _Wait_ for `Product.findByIdAndUpdate(id, updatedProduct)`.
- Respond with a status `200` and the message `{ status: "Product successfully updated." }`.

#### Refactor the `ProductForm` component

For now, the `ProductForm` component sends a `POST` request to your database. We want to reuse the component for editing products and sending `PUT` requests as well.

Switch to `./components/ProductForm/index.js`.

Lift up all logic regarding the creating of the `productData` to the `./pages/index.js` file.

> 💡 This includes the destructuring of `const { mutate } = useSWR("/api/products");`, the `handleSubmit` function and the import of `useSWR`.

After doing so,

- rename the `handleSubmit` function to `handleAddProduct`
- in the return statement, pass `handleAddProduct` to the `ProductForm` component as a prop called `onSubmit`.

Switch back to `./components/ProductForm/index.js` and

- receive the `onSubmit` prop.
- use `onSubmit` instead of `handleSubmit` in the form

> 💡 Bonus: Pass another new prop to the `ProductForm` component to set the heading of the form dynamically ("Add a new Fish" is not a proper headline when updating the product, right?).

#### Send a `PUT` request

Switch to `components/Product/index.js.js`.

You will need the `mutate` method to revalidate the product data after a successful update:

- destructure mutate from the object received from the `useSWR` hook.

Below this code, create a `handleEditProduct()` function:

- it receives `event` as parameter,
- it stores the submitted data in a variable called `productData` (Hint: `new FormData` and `Object.fromEntries` as already used)
- it starts a "PUT" request with `fetch` (hint: this fetch is similar to the "POST" fetch we perform to create products)
- uses `mutate` after a successful fetch to update the product detail page.

We need to update the content of our Product component to display the edit form:

- Create a state called `isEditMode` and initialize it with `false`.
- In the return statement, add a `<button>` with
  - `type="button"`,
  - `onClick={() => { setIsEditMode(!isEditMode); }}`,
  - and a proper text.
- In the return statement, display the `ProductForm` component depending on the `isEditMode` state (Hint: `isEditMode && ...`).
- pass our `handleEditProduct` function to the `ProductForm` as the `onSubmit` prop.

Open [`localhost:3000/`](http://localhost:3000/) in your browser, switch to a details page, edit a fish and be happy about your shop being expanded!

### `DELETE` Request

#### Add a `DELETE` route

Switch to [`pages/api/products/[id].js`](./pages/api/products/[id].js) and write the code for the `request.method` `DELETE` :

- _Wait_ for `Product.findByIdAndDelete(id)`.
- Respond with a status `200` and the message `{ status: "Product successfully deleted." }`.

#### Send a `DELETE` request

Deleting a product should be possible from the details page.

Switch to `./components/Product/index.js` and implement a delete button:

- In the return statement, add a `<button>` with
  - `type="button"`,
  - `onClick={() => handleDeleteProduct(id)}`,
  - and a proper text.

Write the `handleDeleteProduct` function:

- _Wait_ for a `fetch()` with two arguments:
  - the url `/api/products/${id}` and
  - an options object `{ method: "DELETE" }`
- Save the result in a variable called `response`.
- If the `response` is `ok`,
  - _wait_ for `response.json()` and use `push("/")`.
- If the `response` is not `ok`, log the `response.status` as an error to the console.

Open [`localhost:3000/`](http://localhost:3000/) in your browser, switch to a details page, delete a fish and be happy about your shop being expanded!

### Resources

You can find the fish shop data in [this folder](./resources/).

- The files are already in the correct structure for the app.
  - `products.json` contains the data for the all fish,
  - `reviews.json` contains the data for all reviews.
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
