import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-end: 5vh;
  width: 100vw;
  height: 100vh;
`;

import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <AppWrapper>
      <Main>{children}</Main>
      <Navigation />
    </AppWrapper>
  );
}

export default Layout;
