import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const Nav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <StyledList>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </StyledList>
      </Nav>
      <Component {...pageProps} />
    </>
  );
}
