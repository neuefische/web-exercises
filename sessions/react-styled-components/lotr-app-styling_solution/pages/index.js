import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Main>
      <StyledLink href="/volumes">Go to all volumes</StyledLink>
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  place-items: center;
  place-content: center;
  min-height: 100vh;
`;

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;
  font: var(--font-headline-2);
`;
