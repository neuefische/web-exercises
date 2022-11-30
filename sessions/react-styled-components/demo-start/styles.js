import { createGlobalStyle } from "styled-components";

<<<<<<< HEAD
export default createGlobalStyle`
=======
export const GlobalStyle = createGlobalStyle`
>>>>>>> b678b29 (add styled components demo)
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 2rem;
  }
`;
