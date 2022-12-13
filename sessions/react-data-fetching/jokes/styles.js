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
  }

  h1 {
  color: var(--color-nemo);
  text-shadow: 2px 2px var(--color-granite);
  margin: 0.5rem 0 0 0.5rem;
}
`;
