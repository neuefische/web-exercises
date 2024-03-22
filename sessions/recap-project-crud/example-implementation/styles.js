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

  h1, h2 {
    text-align: center;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;
