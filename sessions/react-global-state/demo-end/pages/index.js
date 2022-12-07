import styled from "styled-components";
import Link from "next/link";

import CounterStats from "./components/CounterStats";

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

export default function HomePage({ countSum, dragonCount, countAverage }) {
  return (
    <>
      <MainWrapper>
        <CounterStats
          countSum={countSum}
          dragonCount={dragonCount}
          countAverage={countAverage}
        />
      </MainWrapper>

      <NavWrapper>
        <StyledLink href="/counters">To the counters →</StyledLink>
      </NavWrapper>
    </>
  );
}
