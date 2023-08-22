import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-color: #252629;
  --primary-background: #f3f5f9;

  --accent-color: #ff4a11;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #933d3d
  }

  body {
    margin: 0;
    font-family: system-ui;
<<<<<<<< HEAD:sessions/react-global-state/demo-end__zustand/styles.js
    color: var(--primary-color)
========
>>>>>>>> upstream/main:sessions/recap-project-5/art-gallery-app-solution/styles.js
  }
`;
