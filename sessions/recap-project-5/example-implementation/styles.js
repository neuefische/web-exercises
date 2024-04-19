import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
  }
`;
