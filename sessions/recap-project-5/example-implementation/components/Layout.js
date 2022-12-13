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
  width: 100vw;
  height: 100vh;
  padding-block-end: 5vh; ;
`;

import Navigation from "./Navigation";

function Layout({ children, images }) {
  return (
    <AppWrapper>
      <Main>{children}</Main>
      <Navigation images={images} />
    </AppWrapper>
  );
}

export default Layout;
