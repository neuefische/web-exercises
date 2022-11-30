# React Nesting: Navigation

For now, there is a navigation in the [`src/App.js`](./src/App.js) file which only uses built-in React components.

Let's refactor to use custom components instead; you will encounter the `children` prop and recap props in general.

## Task

In order to provide a clear guide, the exercise is split into sub-tasks to help you following along.

### 1. Header component

Task: Outsource the `<header>` into a `Header` component.

- In the `/src` folder, create a subfolder called `components`. This is where all component files will live.
- In `/src/components`, create a file called `Header.js`.
  - Export a `Header` component which returns the same `<header></header>` element as in the `App.js` file.
  - Don't forget the `className` attribute.
  - The function should receive a `children` prop and render it between the opening and closing `<header>` tags.
- In the `App.js` file, import the `Header` component and replace the `<header></header>` tags with it.

🎉 Congratulations, you've created a wrapping `Header` component using the `children` prop!

### 2. Navigation component

Let's do (almost) the same with the navigation.

Task: Outsource the `<nav>` into a `Navigation` component.

- Create `src/components/Navigation.js`.
- The `Navigation` should receive a `children` prop used in its return statement.
  - 💡 Note that the `nav` does not have a `className`, so there is no need to add this attribute.
- In the `App.js` file, import the `Navigation` component and replace the `<nav></nav>` tags with it.

Awesome! You are a true `children` prop professional now. Let's dive deeper!

### 3. Link component

Task: Create a `Link` component to render `<a>` tags.

- Create a file for the `Link` component.
- The `Link` component returns an `<a>` element with `className="navigation__link"` and receives the props
  - `href` which is passed to the `href` attribute of the `<a>` tag and
  - `children` passed between the opening and closing `<a>` tags.
- In the `App.js` file, import the `Link` component and replace the `<a></a>` tags with it.
  - Make sure to pass the correct prop(s?).

🎉 Awesome, you've created a very flexible `Link` component! Want more? You'll get more!

### 4. Image component

Task: Create an `Image` component to render `<img>` tags.

> 💡 This will be a helper component to create a `Logo` and `Avatar` component.

- The `Image` component returns an `<img>` element with `className="round-image"` and
- receives the props `src` and `alt` and passes them to the `src` and `alt` attributes.
- as we don't need children here, this component should not have a `children` prop

### 5. Logo and Avatar component

Task: Create a `Logo` and `Avatar` component, respectively.

- Use the same JSX as in the `App.js` as basis (copy the tags including `<a>` or `<button>` tag and their children)
  - import the `Image` component and use it.
  - make sure to import the correct `jpg` file.
- In the `App.js` file, import the `Logo` and `Avatar` component and replace the relevant JSX to use them.
- Check that the UI still looks the same.

You should now have an `App` component returning only your custom components (besides `main`)! Nice work 🎉

To check, you App.js file should look something like this now:

```js
import { Avatar } from "./components/Avatar";
import { Header } from "./components/Header";
import { Link } from "./components/Link";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
```

## Notes

- You only have to touch the [`src/App.js`](./src/App.js) file and the files you are going to create during this exercise.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
