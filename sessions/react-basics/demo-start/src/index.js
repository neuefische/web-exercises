import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//----------------------------------------------------------------------
// Button in Vanilla JS

const vanillaJSRootElement = document.querySelector("#vanilla-js-root");

//----------------------------------------------------------------------

// index.js in React

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
