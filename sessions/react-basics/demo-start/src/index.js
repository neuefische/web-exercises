import { createRoot } from "react-dom/client";

//----------------------------------------------------------------------
// Button in Vanilla JS

const vanillaJSRootElement = document.querySelector("#vanilla-js-root");

//----------------------------------------------------------------------
// Button in React

// This is the dom element that React will render into,
// per convention, it is usually a div with an id of "root".
const reactRootElement = document.querySelector("#root");

// This is the "react" way to create a "root" that react can render into.
const reactRoot = createRoot(reactRootElement);

// Call ".render()" on the root to render the elements into the DOM.
// Notice that this is NOT a template literal, it is JSX.
reactRoot.render();
