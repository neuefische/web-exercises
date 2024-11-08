# react-styled-components: Card Conversion

We currently have a `Card` component that is styled using `BEM`. Let's change it to use `styled components`. The initial setup for `styled components` has been completed for you.

## Tasks

### Redo the `Card` component to use `styled components`

- You will need to remove `className` attributes from the 3 elements in `Card`.
- Make sure you import `styled` from `styled-components`. e.g.

```js
import styled from "styled-components";
```

- You will need to create 3 styled components. One for the `CardWrapper` (which will replace `card`), one for the `CardTitle` and one for the `CardDescription`
- You can copy over the styles from `/components/Card/Card.css`

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
