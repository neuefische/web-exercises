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

  button {
    appearance: none;
    border: none;
    background: var(--color-water-10);
    font-size: larger;
    padding: 0.5rem 1rem;
    box-shadow: 0px 1px 5px -2px var(--color-granite);
  } 

  ul {
    list-style-type: none;
  }

  ul li {
    margin-block: 1rem;
    box-shadow: 0px 1px 5px -2px var(--color-granite);
  }
 `;
