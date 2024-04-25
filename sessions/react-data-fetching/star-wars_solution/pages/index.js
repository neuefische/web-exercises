import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        <li>
          <StyledLink href="/characters/1">Luke Skywalker</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/2">C-3PO</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/3">R2-D2</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/4">Darth Vader</StyledLink>
        </li>
      </List>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: "➡️ ";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
`;
