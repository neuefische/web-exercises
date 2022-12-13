import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-dark: #111111;
  --color-light: #eeeeee;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-dark);
    color: var(--color-light);
  }

  ul {
    padding: 0;
  }
`;
