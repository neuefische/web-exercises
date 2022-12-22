import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-end: 5vh;
  height: 100%;
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
