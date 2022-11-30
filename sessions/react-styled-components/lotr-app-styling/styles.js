import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  /* Color styles */
  --color-earth: #282828;
  --color-clouds: #f1f1f1;
  --color-smoke: #d4d1cd;

  /* Font styles */
  /*
    use like:
    font: var(--font-body);
  */
  --font-headline-1: normal 700 44px/48px "Lora", serif;
  --font-headline-2: normal 700 32px/41px "Lora", serif;
  --font-title: normal 700 16px/20px "Lora", serif;
  --font-caption: normal 500 12px/15px "Lora", serif;
  --font-caption--italic: italic 400 12px/15px "Lora", serif;
  --font-body: normal 400 16px/20px "Lora", serif;

  /* Effect styles */
  /*
    use like:
    box-shadow: var(--box-shadow-book);
  */
  --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09),
    0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),
    0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

  --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),
    0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),
    0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font: var(--font-body);
  }

  ul {
    padding: 0;
  }

  h1 {
    font: var(--font-headline-1);
  }
`;
