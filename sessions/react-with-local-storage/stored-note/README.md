# React with Local Storage: Stored Note

The contents of this notepad are lost when you refresh the page. Make it persistent by saving the contents to local storage.

## Tasks

Switch to the `./src/App.jsx` file and replace both `useState` hooks with `useLocalStorageState` hooks to make the notepad and the font selection persistent. The `use-local-storage-state` package is already installed. Import it like this:

```jsx
import useLocalStorageState from "use-local-storage-state";

```

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.



### Scripts

You can use the following commands:

- `npm run dev` to start a development server
