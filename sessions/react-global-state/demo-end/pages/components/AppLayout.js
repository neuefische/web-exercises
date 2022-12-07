import styled from "styled-components";
import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  align-items: center;
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
  background: var(--primary-color);
  color: #eee;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default function AppLayout({ countSum, dragonCount, children }) {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/">
          <Header countSum={countSum} />
        </StyledLink>
      </StyledHeader>
      <Container>{children}</Container>
      <StyledFooter>
        <Footer dragonCount={dragonCount} />
      </StyledFooter>
    </>
  );
}
