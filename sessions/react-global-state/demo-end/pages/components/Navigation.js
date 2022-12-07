import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1.5ch;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 1ch;
`;

const StyledLink = styled.a`
  color: var(--accent-color);
  text-decoration: none;
`;

export default function Navigation() {
  return (
    <Container>
      <span>Learn more about</span>
      <List>
        <li>
          <StyledLink
            href="https://google.com/search?q=Cats"
            target="_blank"
            rel="noreferrer"
          >
            Cats
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="https://google.com/search?q=Dogs"
            target="_blank"
            rel="noreferrer"
          >
            Dogs
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="https://google.com/search?q=Sheep"
            target="_blank"
            rel="noreferrer"
          >
            Sheep
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="https://google.com/search?q=Dragons"
            target="_blank"
            rel="noreferrer"
          >
            Dragons
          </StyledLink>
        </li>
      </List>
    </Container>
  );
}
