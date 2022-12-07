import styled from "styled-components";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

const StyledNav = styled.nav`
  padding: 1rem;
`;

const StyledMain = styled.main`
  padding: 1rem;
`;

export default function OverviewPage({ animals, handleAdd, handleSubtract }) {
  return (
    <>
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
    </>
  );
}
