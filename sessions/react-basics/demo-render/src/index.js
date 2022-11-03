/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";

// This is the dom element that react will render into,
// per convention, it is usually a div with an id of "root".
const rootElement = document.querySelector("#root");

// This is the react way to create a "root" that react can render into.
const root = createRoot(rootElement);

// Call render on the root to render the elements into the DOM.
// Notice that this is NOT a template literal, it is JSX.
root.render(<h1>Hello World 👋</h1>);
