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

  body {
    margin: 0;
    font-family: system-ui;
    color: var(--primary-color)
  }
`;
