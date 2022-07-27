import { createGlobalStyle } from 'styled-components';

/*
EXERCISE 3 - Our Global Styles

[x] Namely import createGlobalStyle from styled-components
[x] Create a styled-component using the createGlobalStyle function
[x] Apply some styles to the asterisk-selector ( * )
[ ] Declare some color-variables in the :root selector
[ ] Set a background color for the body, use a variable
[ ] Use your variables within your StyledButton

*/

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
