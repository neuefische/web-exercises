# React with Local Storage: Stored Note

The contents of this notepad are lost when you refresh the page. Make it persistent by saving the contents to local storage.

## Task

Switch to the [`src/App.js`](./src/App.js) file and replace both `useState` hooks with `useLocalStorageState` hooks to make the notepad and the font selection persistent. The `use-local-storage-state` package is already installed. Import it like this:

```js
import useLocalStorageState from "use-local-storage-state";
```

## Notes

- You only have to touch the [`src/App.js`](./src/App.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
