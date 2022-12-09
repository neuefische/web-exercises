import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  h2 {
    margin: 0;
  }

`;
