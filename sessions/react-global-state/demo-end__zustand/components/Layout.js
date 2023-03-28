import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  color: #eee;
`;

const StyledFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  color: #eee;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 60rem;
  flex-direction: column;
  padding: 5rem 1rem;
  gap: 1rem;
`;

export default function Layout({ countSum, dragonCount, children }) {
  return (
    <>
      <StyledHeader>
        <Header countSum={countSum} />
      </StyledHeader>
      <Container>{children}</Container>
      <StyledFooter>
        <Footer dragonCount={dragonCount} />
      </StyledFooter>
    </>
  );
}
