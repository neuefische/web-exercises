# Backend Api Routes: Products

In this challenge, you will

- create an api with two endpoints (for all products and for a single one) and
- consume these endpoints with `SWR` to render the products in the browser.

## Task

- Check `./services/productServices.js`: there is an array of products and two functions which return either all or a single product.

### Create the API

#### Endpoint for All Listings

Create an api route which returns all products.

- Create the file structure `pages/api/products/index.js`.
- Switch to `/api/products/index.js`; import the `getAllProducts` function from `/services/productServices.js`.
- Write a handler function which responds
  - with a `200` status code and
  - with the return value of `getAllProducts`, parsed with the `.json()` method.

Check your api route:

- run `npm run dev` and
- switch to the browser and open `/api/products`: you should now see an array of all products.

#### Endpoint for Single Listing

Create an api route which returns a single product based on the id passed as query parameter.

- Create the file `/api/products/[id].js`.
- Switch to `/api/products/[id].js`; import the `getProductById` function from `/services/productServices.js`.
- Write a handler function which responds
  - with a `200` status code and
  - with the return value of `getProductById()`, parsed with the `.json()` method.
  - To access the `id` from the url, destructure the `id` variable from `request.query` and pass `id` as argument to `getProductById(id)`.

Check your api route:

- switch to the browser and open `/api/products/1`: you should now see the product with `id: 1`.

### Create the Frontend

You have now prepared two api routes: let's use them to display the data on two pages, an overview and a details page for our products!

#### All Listings Page

- Create the file `/pages/products/index.js`.
- Import the `useSWR` hook, create a fetcher and fetch `/api/products`.
- Map over the fetched `data` object to create a list of all products where you display their information.
- Switch to the browser and open `/products`: you should now see a (rarely styled) list of all products.

✨ Great work, you've consumed your own api route to display its data in the frontend!

#### Details Page

The details page works quite similar to the All Listings Page, but there are some minor adaptions:

- Create the file `/pages/products/[id].js`.
- Use the `useRouter` hook to access the `id` query parameter from `router.query`.
- Fetch from `/api/products/[id]` (you need to interpolate the query `id` accordingly).
- The return statement does not return a list, but a single product.

Switch to the browser and open `/products/[someId]`: you should now see the product with the id you've passed in the url.

## Development

### Local Development

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
