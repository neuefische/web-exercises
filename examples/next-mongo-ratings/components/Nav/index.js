import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 0 1rem;
  height: 3rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">Home</Link>
      <Link href="/pets">Pets</Link>
    </StyledNav>
  );
}
