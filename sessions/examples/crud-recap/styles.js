import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #118ab2;
    --primary-color-hover: #0077b6;
    --danger-color: #9d0208;
    --danger-color-hover: crimson;
    --neutral-color: lightGray;
    --neutral-color-hover: gray;
  }

  html {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  body {
    margin: 0;
background: hsla(120, 93%, 84%, 1);

background: linear-gradient(90deg, hsla(120, 93%, 84%, 1) 0%, hsla(185, 90%, 51%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(120, 93%, 84%, 1) 0%, hsla(185, 90%, 51%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(120, 93%, 84%, 1) 0%, hsla(185, 90%, 51%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#AFFCAF", endColorstr="#12DFF3", GradientType=1 );
  }

  #__next {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 100vh;
  }
`;

export const colors = {
  default: "var(--primary-color)",
  defaultHover: "var(--primary-color-hover)",
  danger: "var(--danger-color)",
  dangerHover: "var(--danger-color-hover)",
  neutral: "var(--neutral-color)",
  neutralHover: "var(--neutral-color-hover)",
};

export const actionSizes = {
  normal: {
    height: "2.5rem",
    fontSize: "0.8rem",
    padding: "0 1rem",
  },
  large: {
    height: "4rem",
    fontSize: "1.2rem",
    padding: "0 2rem",
  },
};
