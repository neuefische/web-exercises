import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-white: #fffffe;
    --color-grey: #a7a9be;
    --color-dark: #0f0e17;
    --color-black: black;

    --color-highlight: #ff8906;
    --color-tertiary: #e53170;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    max-width: 375px;
  }
`;
