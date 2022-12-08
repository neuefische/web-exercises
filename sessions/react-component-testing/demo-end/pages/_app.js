import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledApp = styled("div")`
  width: min(500px, 100% - 2rem);
`;

export default function App({ Component, pageProps }) {
  return (
    <StyledApp>
      <GlobalStyle />
      <Component {...pageProps} />
    </StyledApp>
  );
}
