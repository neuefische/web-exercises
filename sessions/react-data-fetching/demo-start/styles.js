import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-nemo: #ff4a11;
    --color-granite: #252629;
    --color-water-10: #f3f5f9;
    --color-foam: #ffffff;

    --gap: 20px;
  }
    
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  #__next {
    min-height: 100vh;
    max-width: 50rem;
    padding: 2rem;
    display: grid;
    place-items: center;
    gap: 2rem;
    align-content: center;
  }

  button {
    font-size: larger;
    padding: 0.5rem 1rem;
  }
`;
