import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: #364F6B;
    --color-secondary: #3FC1C9;
    --color-danger: #FF0000;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
