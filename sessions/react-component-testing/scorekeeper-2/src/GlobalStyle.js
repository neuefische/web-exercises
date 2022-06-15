import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 0 auto;
  max-width: 600px;
}

input,
button {
  font-size: inherit;
  padding: 5px;
}

h1, h2, h3, h4, h5, h6 {
   margin: 0;
}
`;
