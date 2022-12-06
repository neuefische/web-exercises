import styled from "styled-components";
import Link from "next/link";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Navigation from "./Navigation";

const StyledGrid = styled.div`
  display: grid;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(10px, 2fr) minmax(10px, 5fr);
  grid-template-rows: min-content 1fr min-content min-content;
  gap: 0.5rem;

  > * {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
`;

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  background: var(--primary-color);
  color: #eee;
`;

const StyledAside = styled.aside`
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  background: var(--primary-background);
`;

const StyledNav = styled.nav`
  grid-column: 2 / 3;
`;

const StyledMain = styled.main`
  grid-column: 2 / 3;
`;

const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  background: var(--primary-color);
  color: #eee;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function AppLayout({
  animals,
  countSum,
  countAverage,
  dragonCount,
  handleAdd,
  handleSubtract,
}) {
  return (
    <StyledGrid>
      <StyledHeader>
        <StyledLink href="/">
          <Header countSum={countSum} />
        </StyledLink>
      </StyledHeader>

      <StyledAside>
        <StyledLink href="/">⬅︎ Back</StyledLink>
        <Sidebar countAverage={countAverage} />
      </StyledAside>

      <StyledMain>
        <MainContent
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
      </StyledMain>

      <StyledNav>
        <Navigation />
      </StyledNav>

      <StyledFooter>
        <Footer dragonCount={dragonCount} />
      </StyledFooter>
    </StyledGrid>
  );
}
