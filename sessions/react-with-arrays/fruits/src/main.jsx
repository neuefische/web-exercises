import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // CreateRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
