import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import VanillaApp from "./VanillaApp";
//----------------------------------------------------------------------
// Button in Vanilla JS

// This is the dom element we use to append our vanilla js button to.
const vanillaJsRootElement = document.querySelector("#vanilla-js-root");

const vanillaApp = VanillaApp();

vanillaJsRootElement.append(vanillaApp);

//----------------------------------------------------------------------
// index.js in React

// This is the dom element that React will render into,
// per convention, it is usually a div with an ID of "root".
const rootElement = document.getElementById("root");

// This is the "react" way to create a "root" that react can render into.
const root = createRoot(rootElement);

// Call ".render()" on the root to render the elements into the DOM.
// Notice that this is NOT a template literal, it is JSX.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
