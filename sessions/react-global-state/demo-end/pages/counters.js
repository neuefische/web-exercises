import styled from "styled-components";
import Link from "next/link";

import InfoBox from "./components/InfoBox";
import Navigation from "./components/Navigation";
import CounterList from "./components/CounterList";

const NavWrapper = styled.nav`
  padding-inline: 1rem;
`;

const MainWrapper = styled.main`
  padding-inline: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--accent-color);
`;

export default function CountersPage({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <NavWrapper>
        <StyledLink href="/">← Back</StyledLink>
      </NavWrapper>

      <MainWrapper>
        <CounterList
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
        <InfoBox />
      </MainWrapper>

      <NavWrapper>
        <Navigation />
      </NavWrapper>
    </>
  );
}
