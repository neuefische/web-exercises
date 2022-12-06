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

  a:any-link {
    color: var(--accent-color);
  }
`;

export default function Navigation() {
  return (
    <Container>
      <span>Learn more</span>
      <List>
        <li>
          <a
            href="https://google.com/search?q=Cats"
            target="_blank"
            rel="noreferrer"
          >
            Cats
          </a>
        </li>
        <li>
          <a
            href="https://google.com/search?q=Dogs"
            target="_blank"
            rel="noreferrer"
          >
            Dogs
          </a>
        </li>
        <li>
          <a
            href="https://google.com/search?q=Sheep"
            target="_blank"
            rel="noreferrer"
          >
            Sheep
          </a>
        </li>
        <li>
          <a
            href="https://google.com/search?q=Dragons"
            target="_blank"
            rel="noreferrer"
          >
            Dragons
          </a>
        </li>
      </List>
    </Container>
  );
}
