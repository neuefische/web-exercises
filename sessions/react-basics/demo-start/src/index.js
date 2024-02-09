import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import VanillaApp from "./VanillaApp.js";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//----------------------------------------------------------------------
// simulated Vanilla JS environment

const vanillaJSRootElement = document.querySelector("#vanilla-js-root");
